// app/admin/events/page.tsx
"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  ImageIcon, 
  Loader2, 
  Trash2, 
  CalendarDays, 
  CheckCircle, 
  AlertCircle, 
  X, 
  Pencil, 
  RefreshCw,
  UploadCloud,
  Star
} from "lucide-react";
import Image from "next/image";
import imageCompression from 'browser-image-compression'; 
import { motion, AnimatePresence } from "framer-motion";

// --- Types ---
interface EventItem {
  id: string;
  title: string;
  date: string;
  description: string;
  images: string[];
}

// Internal type to handle mixed (existing URL + new File) images
interface GalleryItem {
  id: string;      // Unique ID for UI handling
  url: string;     // Preview URL
  file?: File;     // File object (if new)
  isNew: boolean;  // Flag to check if it needs upload
}

// --- Custom Toast Notification ---
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

export default function AdminEventsPage() {
  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);
  const [compressing, setCompressing] = useState(false);
  const [eventsList, setEventsList] = useState<EventItem[]>([]);
  
  // Form States
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  
  // Image State (Mixed: Existing URLs + New Files)
  const [galleryItems, setGalleryItems] = useState<GalleryItem[]>([]);
  const [coverIndex, setCoverIndex] = useState<number>(0);

  // Notification State
  const [notification, setNotification] = useState<{ message: string, type: 'success' | 'error' } | null>(null);

  // --- Fetch Events ---
  const fetchEvents = async () => {
    setFetchLoading(true);
    const { data, error } = await supabase
      .from('events')
      .select('*')
      .order('date', { ascending: false });

    if (data) setEventsList(data);
    if (error) console.error("Error fetching events:", error);
    setFetchLoading(false);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // --- Reset Form ---
  const resetForm = () => {
    setTitle("");
    setDate("");
    setDescription("");
    setGalleryItems([]);
    setCoverIndex(0);
    setEditingId(null);
  };

  // --- Image Handling ---
  const handleImageSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    if (galleryItems.length + files.length > 15) {
      setNotification({ message: "Maximum 15 images allowed.", type: "error" });
      return;
    }

    setCompressing(true);

    try {
      const newItems: GalleryItem[] = [];

      for (const file of files) {
        const options = {
          maxSizeMB: 0.8,
          maxWidthOrHeight: 1920,
          useWebWorker: true,
          fileType: "image/jpeg"
        };

        try {
          const compressedFile = await imageCompression(file, options);
          newItems.push({
            id: Math.random().toString(36).substr(2, 9),
            url: URL.createObjectURL(compressedFile),
            file: compressedFile,
            isNew: true
          });
        } catch (error) {
          console.error("Compression error:", error);
          // Fallback to original
          newItems.push({
            id: Math.random().toString(36).substr(2, 9),
            url: URL.createObjectURL(file),
            file: file,
            isNew: true
          });
        }
      }

      setGalleryItems(prev => [...prev, ...newItems]);

    } catch (error) {
      console.error(error);
      setNotification({ message: "Error processing images.", type: "error" });
    } finally {
      setCompressing(false);
    }
  };

  const removeImage = (index: number) => {
    const itemToRemove = galleryItems[index];
    if (itemToRemove.isNew) {
      URL.revokeObjectURL(itemToRemove.url); // Cleanup memory
    }

    const newItems = galleryItems.filter((_, i) => i !== index);
    setGalleryItems(newItems);

    // Adjust cover index
    if (index === coverIndex) setCoverIndex(0);
    if (index < coverIndex) setCoverIndex(prev => prev - 1);
  };

  // --- Handle Submit (Add or Update) ---
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !date || !description || galleryItems.length === 0) {
      setNotification({ message: "Please fill fields & add images.", type: "error" });
      return;
    }

    setLoading(true);

    try {
      // 1. Reorder Images locally first (Cover -> Index 0)
      const orderedItems = [...galleryItems];
      if (coverIndex > 0 && coverIndex < orderedItems.length) {
        const coverItem = orderedItems[coverIndex];
        orderedItems.splice(coverIndex, 1);
        orderedItems.unshift(coverItem);
      }

      // 2. Upload New Images & Collect All URLs
      const finalImageUrls: string[] = [];

      for (const item of orderedItems) {
        if (item.isNew && item.file) {
          // Upload New
          const fileExt = item.file.name.split('.').pop();
          const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
          
          const { error: uploadError } = await supabase.storage
            .from('event-images')
            .upload(fileName, item.file);

          if (uploadError) throw uploadError;

          const { data: { publicUrl } } = supabase.storage
            .from('event-images')
            .getPublicUrl(fileName);
            
          finalImageUrls.push(publicUrl);
        } else {
          // Keep Existing URL
          finalImageUrls.push(item.url);
        }
      }

      // 3. Database Operation
      const eventData = {
        title,
        description,
        date,
        images: finalImageUrls
      };

      if (editingId) {
        // UPDATE
        const { error } = await supabase
          .from('events')
          .update(eventData)
          .eq('id', editingId);
        if (error) throw error;
        setNotification({ message: "Event Updated Successfully!", type: "success" });
      } else {
        // INSERT
        const { error } = await supabase
          .from('events')
          .insert([eventData]);
        if (error) throw error;
        setNotification({ message: "Event Published Successfully!", type: "success" });
      }

      resetForm();
      fetchEvents();

    } catch (error) {
      console.error(error);
      setNotification({ message: "Operation failed.", type: "error" });
    } finally {
      setLoading(false);
    }
  };

  // --- Handle Edit Click ---
  const handleEdit = (item: EventItem) => {
    setTitle(item.title);
    setDate(item.date);
    setDescription(item.description);
    setEditingId(item.id);
    
    // Map existing URLs to GalleryItems
    const existingGallery = item.images.map(url => ({
      id: Math.random().toString(36).substr(2, 9),
      url: url,
      isNew: false
    }));
    
    setGalleryItems(existingGallery);
    setCoverIndex(0); // Default cover is first image
    
    // Scroll to form
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setNotification({ message: "Editing mode enabled.", type: "success" });
  };

  // --- Handle Delete ---
  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure? This cannot be undone.")) return;

    try {
      const { error } = await supabase.from('events').delete().eq('id', id);
      if (error) throw error;
      
      setNotification({ message: "Event Deleted.", type: "success" });
      setEventsList(prev => prev.filter(item => item.id !== id));
      
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
        
        {/* --- LEFT: FORM SECTION (2 Columns) --- */}
        <div className="lg:col-span-2 space-y-6">
          <div className="mb-2">
            <h1 className="text-2xl font-bold text-gray-900 font-serif">Manage Events</h1>
            <p className="text-sm text-gray-500">Create or edit school events gallery.</p>
          </div>

          <Card className="shadow-md border-0 bg-white">
            <CardHeader className={`px-6 py-4 border-b ${editingId ? 'bg-yellow-50' : 'bg-gray-50'}`}>
              <CardTitle className="flex items-center gap-2 text-base font-bold">
                {editingId ? (
                  <>
                    <Pencil className="w-4 h-4 text-yellow-600" />
                    <span className="text-yellow-700">Edit Event</span>
                  </>
                ) : (
                  <>
                    <ImageIcon className="w-4 h-4 text-[#800000]" />
                    <span className="text-[#800000]">Create New Event</span>
                  </>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-5 space-y-4">
              
              <div className="space-y-1.5">
                <Label className="text-xs font-semibold text-gray-600 uppercase">Title</Label>
                <Input 
                  value={title} 
                  onChange={e => setTitle(e.target.value)} 
                  placeholder="Ex: Annual Sports Meet" 
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
                  placeholder="Event details..." 
                  className="min-h-[100px] text-sm focus-visible:ring-[#800000] resize-none"
                />
              </div>

              {/* Image Upload Area */}
              <div className="space-y-3 pt-2">
                <div className="flex justify-between items-center">
                    <Label className="text-xs font-bold text-gray-700">Gallery Images</Label>
                    <span className="text-[10px] text-gray-400">Max 15 • Auto-Compress</span>
                </div>
                
                {/* Upload Box */}
                <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-all relative group ${
                    compressing ? "bg-gray-50" : "hover:border-[#800000] hover:bg-red-50/20"
                }`}>
                  <input 
                    type="file" 
                    multiple 
                    accept="image/*" 
                    onChange={handleImageSelect}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer disabled:cursor-not-allowed"
                    disabled={galleryItems.length >= 15 || compressing}
                  />
                  
                  <div className="flex flex-col items-center gap-2">
                    {compressing ? (
                       <Loader2 className="w-6 h-6 text-[#800000] animate-spin" />
                    ) : (
                       <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-[#800000]" />
                    )}
                    <p className="text-xs font-medium text-gray-500">
                        {compressing ? "Optimizing..." : "Click to Upload"}
                    </p>
                  </div>
                </div>

                {/* Preview Grid */}
                {galleryItems.length > 0 && (
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {galleryItems.map((item, idx) => (
                      <div 
                        key={item.id} 
                        className={`relative aspect-square rounded-md overflow-hidden group border ${
                          idx === coverIndex ? "ring-2 ring-yellow-400 border-yellow-400" : "border-gray-200"
                        }`}
                      >
                        <Image src={item.url} alt="Preview" fill className="object-cover" />
                        
                        {/* Star / Delete Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1">
                            {idx !== coverIndex && (
                              <button
                                type="button"
                                onClick={() => setCoverIndex(idx)}
                                className="text-yellow-400 hover:scale-110 transition-transform"
                                title="Set as Cover"
                              >
                                <Star className="w-4 h-4 fill-current" />
                              </button>
                            )}
                            <button 
                              type="button"
                              onClick={() => removeImage(idx)}
                              className="text-white hover:text-red-400 hover:scale-110 transition-transform"
                            >
                              <X className="w-4 h-4" />
                            </button>
                        </div>
                        
                        {idx === coverIndex && (
                          <div className="absolute top-0 right-0 bg-yellow-400 text-[8px] font-bold px-1 text-black">
                            COVER
                          </div>
                        )}
                      </div>
                    ))}
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
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : editingId ? "Update Event" : "Publish Event"}
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

        {/* --- RIGHT: LIST SECTION (3 Columns) --- */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-gray-800">Event Gallery</h2>
            <Button 
                variant="ghost" 
                size="sm" 
                onClick={fetchEvents} 
                className="text-xs text-gray-500 hover:text-[#800000]"
            >
                <RefreshCw className={`w-3.5 h-3.5 mr-1 ${fetchLoading ? 'animate-spin' : ''}`} /> 
                Refresh
            </Button>
          </div>

          <div className="space-y-3 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar pb-10">
            {fetchLoading ? (
              <div className="flex flex-col items-center justify-center h-40 text-gray-400">
                  <Loader2 className="w-8 h-8 animate-spin mb-2 opacity-50" />
                  <p className="text-xs">Loading events...</p>
              </div>
            ) : eventsList.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-xl border border-dashed border-gray-200">
                <p className="text-sm text-gray-400">No events found.</p>
              </div>
            ) : (
              eventsList.map((item) => (
                <div 
                  key={item.id} 
                  className={`bg-white p-3 rounded-lg border shadow-sm transition-all duration-200 group flex gap-4 ${
                    editingId === item.id 
                        ? 'border-yellow-400 ring-1 ring-yellow-400 bg-yellow-50/30' 
                        : 'border-gray-100 hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  {/* Thumbnail */}
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-md overflow-hidden bg-gray-100 border border-gray-200">
                    {item.images?.[0] ? (
                      <Image 
                        src={item.images[0]} 
                        alt="Thumb" 
                        fill 
                        className="object-cover" 
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full text-gray-300">
                        <ImageIcon className="w-6 h-6" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-[#800000] text-[10px] font-bold mb-1 uppercase tracking-wide">
                      <CalendarDays className="w-3 h-3" />
                      {new Date(item.date).toLocaleDateString()}
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm leading-snug mb-1 truncate">
                        {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {item.description}
                    </p>
                    <div className="text-[10px] text-gray-400 mt-1">
                        {item.images?.length || 0} Images
                    </div>
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