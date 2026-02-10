// app/admin/news/page.tsx
"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Newspaper, 
  Loader2, 
  Trash2, 
  CalendarDays, 
  CheckCircle, 
  AlertCircle, 
  X, 
  Pencil, 
  RefreshCw,
  UploadCloud,
  ImageIcon
} from "lucide-react";
import Image from "next/image";
import imageCompression from 'browser-image-compression'; 
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
  image_url?: string | null; // Added Image URL
}

// --- Toast Component ---
const Toast = ({ message, type, onClose }: { message: string, type: 'success' | 'error', onClose: () => void }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.9 }}
      className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 px-5 py-3 rounded-lg shadow-xl backdrop-blur-md border border-opacity-50 ${
        type === 'success' 
          ? 'bg-white border-green-200 text-green-700 shadow-green-100' 
          : 'bg-white border-red-200 text-red-700 shadow-red-100'
      }`}
    >
      {type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
      <div>
        <h4 className="font-bold text-sm">{type === 'success' ? 'Success' : 'Error'}</h4>
        <p className="text-xs font-medium opacity-90">{message}</p>
      </div>
      <button onClick={onClose} className="ml-4 p-1 hover:bg-gray-100 rounded-full transition-colors">
        <X className="w-4 h-4 text-gray-400" />
      </button>
    </motion.div>
  );
};

export default function AdminNewsPage() {
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  
  // Form States
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  
  // Image States
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [compressing, setCompressing] = useState(false);

  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  // --- Fetch News ---
  const fetchNews = async () => {
    setFetchLoading(true);
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });

    if (data) setNewsList(data);
    if (error) console.error("Error fetching news:", error);
    setFetchLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // --- Image Handling ---
  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setCompressing(true);
    try {
      const options = {
        maxSizeMB: 0.5, // 500KB Max
        maxWidthOrHeight: 1200,
        useWebWorker: true,
        fileType: "image/jpeg"
      };

      const compressedFile = await imageCompression(file, options);
      setSelectedImage(compressedFile);
      setPreviewUrl(URL.createObjectURL(compressedFile));

    } catch (error) {
      console.error("Compression error:", error);
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    } finally {
      setCompressing(false);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setPreviewUrl(null);
  };

  // --- Reset Form ---
  const resetForm = () => {
    setTitle("");
    setDate("");
    setDescription("");
    setSelectedImage(null);
    setPreviewUrl(null);
    setEditingId(null);
  };

  // --- Handle Submit ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !description) {
      setNotification({ message: "Please fill all required fields.", type: "error" });
      return;
    }

    setLoading(true);

    try {
      let imageUrl = previewUrl; // Keep existing URL if editing and not changed

      // Upload new image if selected
      if (selectedImage) {
        const fileExt = selectedImage.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        
        const { error: uploadError } = await supabase.storage
          .from('news-images')
          .upload(fileName, selectedImage);

        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage
          .from('news-images')
          .getPublicUrl(fileName);
        
        imageUrl = publicUrl;
      }

      const newsData = { 
        title, 
        date, 
        description,
        image_url: imageUrl 
      };

      if (editingId) {
        const { error } = await supabase
          .from('news')
          .update(newsData)
          .eq('id', editingId);

        if (error) throw error;
        setNotification({ message: "News Updated Successfully!", type: "success" });
      } else {
        const { error } = await supabase
          .from('news')
          .insert([newsData]);

        if (error) throw error;
        setNotification({ message: "News Posted Successfully!", type: "success" });
      }

      resetForm();
      fetchNews();

    } catch (error) {
      console.error(error);
      setNotification({ message: "Operation failed.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  // --- Handle Edit ---
  const handleEdit = (item: NewsItem) => {
    setTitle(item.title);
    setDate(item.date);
    setDescription(item.description);
    setPreviewUrl(item.image_url || null);
    setSelectedImage(null); // Reset file selection
    setEditingId(item.id);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setNotification({ message: "Editing mode enabled.", type: "success" });
  };

  // --- Handle Delete ---
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure?")) return;

    try {
      const { error } = await supabase.from('news').delete().eq('id', id);
      if (error) throw error;
      
      setNotification({ message: "News Deleted Successfully", type: "success" });
      setNewsList(prev => prev.filter(item => item.id !== id));
      if (editingId === id) resetForm();

    } catch (error) {
      console.error(error);
      setNotification({ message: "Failed to delete.", type: "error" });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50/50 p-4 md:p-8">
      <AnimatePresence>
        {notification && (
          <Toast 
            message={notification.message} 
            type={notification.type} 
            onClose={() => setNotification(null)} 
          />
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* --- FORM SECTION --- */}
        <div className="lg:col-span-2 space-y-6">
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-gray-900 font-serif">Manage News</h1>
            <p className="text-sm text-gray-500">Create or edit school announcements.</p>
          </div>

          <Card className="shadow-md border-0 bg-white overflow-hidden">
            <CardHeader className={`px-6 py-4 border-b ${editingId ? 'bg-yellow-50' : 'bg-gray-50'}`}>
              <CardTitle className="flex items-center gap-2 text-base font-bold">
                {editingId ? (
                  <>
                    <Pencil className="w-4 h-4 text-yellow-600" />
                    <span className="text-yellow-700">Edit News Item</span>
                  </>
                ) : (
                  <>
                    <Newspaper className="w-4 h-4 text-[#800000]" />
                    <span className="text-[#800000]">Post New Item</span>
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-gray-600 uppercase">Headline</Label>
                <Input 
                  value={title} 
                  onChange={e => setTitle(e.target.value)} 
                  placeholder="Ex: Term 1 Examinations" 
                  className="h-10 text-sm focus-visible:ring-[#800000]"
                />
              </div>
              
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-gray-600 uppercase">Date</Label>
                <Input 
                  type="date" 
                  value={date} 
                  onChange={e => setDate(e.target.value)} 
                  className="h-10 text-sm focus-visible:ring-[#800000]"
                />
              </div>

              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-gray-600 uppercase">Description</Label>
                <Textarea 
                  value={description} 
                  onChange={e => setDescription(e.target.value)} 
                  placeholder="Details about the news..." 
                  className="min-h-[120px] text-sm focus-visible:ring-[#800000] resize-none"
                />
              </div>

              {/* Image Upload */}
              <div className="space-y-2">
                <Label className="text-xs font-semibold text-gray-600 uppercase">Cover Image (Optional)</Label>
                
                {!previewUrl ? (
                  <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-all relative group ${
                      compressing ? "bg-gray-50" : "hover:border-[#800000] hover:bg-red-50/20"
                  }`}>
                    <input 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageSelect}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      disabled={compressing}
                    />
                    <div className="flex flex-col items-center gap-2">
                      {compressing ? (
                         <Loader2 className="w-6 h-6 text-[#800000] animate-spin" />
                      ) : (
                         <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-[#800000]" />
                      )}
                      <p className="text-xs font-medium text-gray-500">
                          {compressing ? "Optimizing..." : "Upload Image"}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative w-full h-40 rounded-lg overflow-hidden border border-gray-200 group">
                    <Image src={previewUrl} alt="Preview" fill className="object-cover" />
                    <button 
                      type="button"
                      onClick={removeImage}
                      className="absolute top-2 right-2 bg-red-600 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="pt-2 flex gap-3">
                <Button 
                  onClick={handleSubmit} 
                  disabled={loading || compressing} 
                  className={`flex-1 h-10 text-sm font-bold shadow-sm ${
                    editingId 
                      ? "bg-yellow-500 hover:bg-yellow-600 text-white" 
                      : "bg-[#800000] hover:bg-[#600000] text-white"
                  }`}
                >
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : editingId ? "Update News" : "Post News"}
                </Button>

                {editingId && (
                  <Button 
                    variant="outline" 
                    onClick={resetForm}
                    disabled={loading}
                    className="h-10 px-4 text-gray-600 hover:bg-gray-100"
                  >
                    Cancel
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* --- LIST SECTION --- */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-gray-800">Recent Posts</h2>
            <Button 
                variant="ghost" 
                size="sm" 
                onClick={fetchNews} 
                className="text-xs text-gray-500 hover:text-[#800000]"
            >
                <RefreshCw className={`w-3.5 h-3.5 mr-1 ${fetchLoading ? 'animate-spin' : ''}`} /> 
                Refresh
            </Button>
          </div>

          <div className="space-y-3 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar pb-10">
            {fetchLoading ? (
              <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                  <Loader2 className="w-8 h-8 animate-spin mb-2 opacity-50" />
                  <p className="text-xs">Loading news...</p>
              </div>
            ) : newsList.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-200">
                <p className="text-sm text-gray-400">No news items found.</p>
              </div>
            ) : (
              newsList.map((item) => (
                <div 
                  key={item.id} 
                  className={`bg-white p-3 rounded-lg border shadow-sm transition-all duration-200 group flex gap-4 ${
                    editingId === item.id 
                        ? 'border-yellow-400 ring-1 ring-yellow-400 bg-yellow-50/30' 
                        : 'border-gray-100 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                   {/* Thumbnail */}
                   <div className="relative w-16 h-16 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 border border-gray-200">
                    {item.image_url ? (
                      <Image 
                        src={item.image_url} 
                        alt="Thumb" 
                        fill 
                        className="object-cover" 
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-300">
                        <ImageIcon className="w-5 h-5" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 text-[#800000] text-xs font-bold mb-1 uppercase tracking-wide">
                      <CalendarDays className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1 truncate">
                        {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {item.description}
                    </p>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-1 justify-center border-l pl-3 border-gray-100">
                    <button 
                      onClick={() => handleEdit(item)}
                      className={`p-1.5 rounded-full transition-colors ${
                        editingId === item.id 
                            ? 'bg-yellow-100 text-yellow-700' 
                            : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                      }`}
                      title="Edit"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => handleDelete(item.id)}
                      className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}