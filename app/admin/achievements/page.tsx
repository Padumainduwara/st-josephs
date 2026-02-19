// app/admin/achievements/page.tsx
"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Trophy, Loader2, Trash2, Pencil, RefreshCw, UploadCloud, X, ImageIcon, CheckCircle, AlertCircle 
} from "lucide-react";
import Image from "next/image";
import imageCompression from 'browser-image-compression'; 
import { motion, AnimatePresence } from "framer-motion";

interface AchievementItem {
  id: string;
  category: string;
  sub_category: string;
  name: string;
  award: string;
  level: string;
  description: string;
  image_url?: string | null;
  type: string;
}

const CATEGORIES = ["sports", "aesthetic", "academic"];
const ICONS = ["sport", "music", "drama", "dance", "media", "general"];

const Toast = ({ message, type, onClose }: { message: string, type: 'success' | 'error', onClose: () => void }) => {
  useEffect(() => { const timer = setTimeout(onClose, 4000); return () => clearTimeout(timer); }, [onClose]);
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-5 py-3 rounded-lg shadow-xl backdrop-blur-md border border-opacity-50 ${
        type === 'success' ? 'bg-white border-green-200 text-green-700 shadow-green-100' : 'bg-white border-red-200 text-red-700 shadow-red-100'
      }`}
    >
      {type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
      <div><h4 className="font-bold text-sm">{type === 'success' ? 'Success' : 'Error'}</h4><p className="text-xs font-medium opacity-90">{message}</p></div>
      <button onClick={onClose} className="ml-4 p-1 hover:bg-gray-100 rounded-full"><X className="w-4 h-4 text-gray-400" /></button>
    </motion.div>
  );
};

export default function AdminAchievementsPage() {
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [achievements, setAchievements] = useState<AchievementItem[]>([]);
  
  const [category, setCategory] = useState("sports");
  const [subCategory, setSubCategory] = useState("");
  const [name, setName] = useState("");
  const [award, setAward] = useState("");
  const [level, setLevel] = useState("");
  const [description, setDescription] = useState("");
  const [iconType, setIconType] = useState("sport");
  const [editingId, setEditingId] = useState<string | null>(null);
  
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [compressing, setCompressing] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  const fetchAchievements = async () => {
    setFetchLoading(true);
    const { data, error } = await supabase.from('achievements').select('*').order('created_at', { ascending: false });
    if (data) setAchievements(data);
    setFetchLoading(false);
  };

  useEffect(() => { fetchAchievements(); }, []);

  const processFile = async (file: File) => {
    if (!file) return;
    setCompressing(true);
    try {
      const options = { maxSizeMB: 0.5, maxWidthOrHeight: 1200, useWebWorker: true, fileType: "image/jpeg" };
      const compressedFile = await imageCompression(file, options);
      setSelectedImage(compressedFile);
      setPreviewUrl(URL.createObjectURL(compressedFile));
    } catch (error) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    } finally { setCompressing(false); }
  };

  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const onDragOver = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(true); };
  const onDragLeave = (e: React.DragEvent) => { e.preventDefault(); setIsDragging(false); };
  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const removeImage = () => { setSelectedImage(null); setPreviewUrl(null); };

  const resetForm = () => {
    setSubCategory(""); setName(""); setAward(""); setLevel(""); setDescription("");
    setSelectedImage(null); setPreviewUrl(null); setEditingId(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subCategory || !name || !award || !level) {
      setNotification({ message: "Please fill all required fields.", type: "error" });
      return;
    }
    setLoading(true);
    try {
      let imageUrl = previewUrl;
      if (selectedImage) {
        const fileExt = selectedImage.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const { error: uploadError } = await supabase.storage.from('achievement-images').upload(fileName, selectedImage);
        if (uploadError) throw uploadError;
        const { data: { publicUrl } } = supabase.storage.from('achievement-images').getPublicUrl(fileName);
        imageUrl = publicUrl;
      }

      const achievementData = { category, sub_category: subCategory, name, award, level, description, type: iconType, image_url: imageUrl };

      if (editingId) {
        const { error } = await supabase.from('achievements').update(achievementData).eq('id', editingId);
        if (error) throw error;
        setNotification({ message: "Achievement Updated!", type: "success" });
      } else {
        const { error } = await supabase.from('achievements').insert([achievementData]);
        if (error) throw error;
        setNotification({ message: "Achievement Added!", type: "success" });
      }
      resetForm(); fetchAchievements();
    } catch (error) { setNotification({ message: "Operation failed.", type: "error" }); } finally { setLoading(false); }
  };

  const handleEdit = (item: AchievementItem) => {
    setCategory(item.category); setSubCategory(item.sub_category); setName(item.name);
    setAward(item.award); setLevel(item.level); setDescription(item.description);
    setIconType(item.type); setPreviewUrl(item.image_url || null); setSelectedImage(null);
    setEditingId(item.id); window.scrollTo({ top: 0, behavior: 'smooth' });
    setNotification({ message: "Editing mode enabled.", type: "success" });
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;
    try {
      const { error } = await supabase.from('achievements').delete().eq('id', id);
      if (error) throw error;
      setNotification({ message: "Deleted Successfully", type: "success" });
      setAchievements(prev => prev.filter(item => item.id !== id));
      if (editingId === id) resetForm();
    } catch (error) { setNotification({ message: "Failed to delete.", type: "error" }); }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <AnimatePresence>{notification && <Toast message={notification.message} type={notification.type} onClose={() => setNotification(null)} />}</AnimatePresence>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-gray-900 font-serif">Manage Achievements</h1>
            <p className="text-sm text-gray-500">Add student victories & awards.</p>
          </div>
          <Card className="shadow-md border-0 bg-white">
            <CardHeader className={`px-6 py-4 border-b ${editingId ? 'bg-yellow-50' : 'bg-gray-50'}`}>
              <CardTitle className="flex items-center gap-2 text-base font-bold">
                {editingId ? <><Pencil className="w-4 h-4 text-yellow-600" /><span className="text-yellow-700">Edit Achievement</span></> : <><Trophy className="w-4 h-4 text-[#800000]" /><span className="text-[#800000]">Add New Achievement</span></>}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-gray-600 uppercase">Category</Label>
                  <select value={category} onChange={e => setCategory(e.target.value)} className="w-full h-10 border rounded-md px-3 text-sm focus:ring-[#800000]">
                    <option value="sports">Sports</option>
                    <option value="aesthetic">Aesthetic</option>
                    <option value="academic">Co-Curricular</option>
                  </select>
                </div>
                <div className="space-y-1.5">
                  <Label className="text-xs font-semibold text-gray-600 uppercase">Icon Type</Label>
                  <select value={iconType} onChange={e => setIconType(e.target.value)} className="w-full h-10 border rounded-md px-3 text-sm focus:ring-[#800000]">
                    {ICONS.map(i => <option key={i} value={i}>{i.charAt(0).toUpperCase() + i.slice(1)}</option>)}
                  </select>
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-gray-600 uppercase">Group Title</Label>
                <Input value={subCategory} onChange={e => setSubCategory(e.target.value)} placeholder="Ex: Basketball Glory" className="h-10 text-sm" />
                <p className="text-[10px] text-gray-400">The main heading for this group of achievements.</p>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-gray-600 uppercase">Name (Student/Team)</Label>
                <Input value={name} onChange={e => setName(e.target.value)} placeholder="Ex: U-19 Team" className="h-10 text-sm" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1.5">
                   <Label className="text-xs font-semibold text-gray-600 uppercase">Award</Label>
                   <Input value={award} onChange={e => setAward(e.target.value)} placeholder="Ex: Champions" className="h-10 text-sm" />
                </div>
                <div className="space-y-1.5">
                   <Label className="text-xs font-semibold text-gray-600 uppercase">Level</Label>
                   <Input value={level} onChange={e => setLevel(e.target.value)} placeholder="Ex: Provincial" className="h-10 text-sm" />
                </div>
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-gray-600 uppercase">Description</Label>
                <Textarea value={description} onChange={e => setDescription(e.target.value)} placeholder="Optional details..." className="min-h-[80px] text-sm resize-none" />
              </div>
              
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-gray-600 uppercase">Image (Optional)</Label>
                {!previewUrl ? (
                  <div 
                    onDragOver={onDragOver}
                    onDragLeave={onDragLeave}
                    onDrop={onDrop}
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-all ${isDragging ? "border-[#800000] bg-red-50" : compressing ? "bg-gray-50" : "hover:bg-red-50/20 hover:border-[#800000]"}`}
                  >
                    <input type="file" accept="image/*" onChange={handleImageSelect} className="hidden" id="upload-ach" disabled={compressing} />
                    <label htmlFor="upload-ach" className="cursor-pointer flex flex-col items-center gap-2">
                       {compressing ? <Loader2 className="w-8 h-8 animate-spin text-[#800000]" /> : <UploadCloud className={`w-10 h-10 ${isDragging ? "text-[#800000]" : "text-gray-400"}`} />}
                       <span className="text-sm font-medium text-gray-600">{compressing ? "Optimizing..." : isDragging ? "Drop Image Here" : "Click or Drag & Drop Image"}</span>
                    </label>
                  </div>
                ) : (
                  // UPDATED: Preview also uses object-contain to match frontend
                  <div className="relative w-full h-40 rounded-lg overflow-hidden border bg-gray-50 group flex items-center justify-center">
                    <Image src={previewUrl} alt="Preview" fill className="object-contain p-2" />
                    <button type="button" onClick={removeImage} className="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"><X className="w-4 h-4" /></button>
                  </div>
                )}
              </div>

              <div className="pt-2 flex gap-3">
                <Button onClick={handleSubmit} disabled={loading || compressing} className={`flex-1 h-10 text-sm font-bold ${editingId ? "bg-yellow-500" : "bg-[#800000]"}`}>
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : editingId ? "Update" : "Add Achievement"}
                </Button>
                {editingId && <Button variant="outline" onClick={resetForm} disabled={loading} className="h-10 px-4">Cancel</Button>}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-gray-800">Recent Records</h2>
            <Button variant="ghost" size="sm" onClick={fetchAchievements} className="text-xs text-gray-500 hover:text-[#800000]"><RefreshCw className={`w-3.5 h-3.5 mr-1 ${fetchLoading ? 'animate-spin' : ''}`} /> Refresh</Button>
          </div>
          <div className="space-y-3 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar pb-10">
            {fetchLoading ? <div className="text-center py-10 text-gray-400">Loading...</div> : achievements.length === 0 ? <div className="text-center py-10 text-gray-400 border border-dashed rounded-xl">No achievements found.</div> : 
              achievements.map((item) => (
                <div key={item.id} className={`bg-white p-3 rounded-lg border shadow-sm flex gap-4 ${editingId === item.id ? 'border-yellow-400 bg-yellow-50/30' : 'border-gray-100 hover:border-gray-300'}`}>
                  {/* List Thumbnail - Kept as object-cover for neat list appearance */}
                  {item.image_url ? <div className="relative w-16 h-16 rounded-md overflow-hidden bg-gray-100 flex-shrink-0"><Image src={item.image_url} alt="Thumb" fill className="object-cover" /></div> : <div className="w-16 h-16 rounded-md bg-gray-100 flex-shrink-0 flex items-center justify-center text-gray-300"><ImageIcon className="w-6 h-6" /></div>}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[#800000] text-[10px] font-bold uppercase tracking-wide"><span>{item.category}</span> • <span>{item.sub_category}</span></div>
                    <h3 className="font-bold text-gray-900 text-sm truncate">{item.name}</h3>
                    <p className="text-xs text-gray-500">{item.award} - {item.level}</p>
                  </div>
                  <div className="flex flex-col gap-1 justify-center border-l pl-3">
                    <button onClick={() => handleEdit(item)} className="p-1.5 rounded-full text-gray-400 hover:text-blue-600 hover:bg-blue-50"><Pencil className="w-4 h-4" /></button>
                    <button onClick={() => handleDelete(item.id)} className="p-1.5 rounded-full text-gray-400 hover:text-red-600 hover:bg-red-50"><Trash2 className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}