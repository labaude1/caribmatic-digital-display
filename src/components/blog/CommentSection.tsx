
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MessageCircle, Reply, ThumbsUp, Flag } from 'lucide-react';
import { toast } from 'sonner';

interface Comment {
  id: string;
  author: string;
  email: string;
  content: string;
  timestamp: string;
  likes: number;
  replies: Comment[];
  isReported?: boolean;
}

interface CommentSectionProps {
  articleId: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ articleId }) => {
  const [comments, setComments] = useState<Comment[]>([
    {
      id: '1',
      author: 'Pierre Durand',
      email: 'pierre@example.com',
      content: 'Excellent article ! Les informations sont très utiles pour comprendre les enjeux de l\'affichage digital en Martinique.',
      timestamp: '2024-01-16T10:30:00Z',
      likes: 5,
      replies: [
        {
          id: '1-1',
          author: 'Marie Lefort',
          email: 'marie@example.com',
          content: 'Je suis d\'accord, merci pour ces précisions !',
          timestamp: '2024-01-16T11:15:00Z',
          likes: 2,
          replies: []
        }
      ]
    }
  ]);

  const [newComment, setNewComment] = useState({
    author: '',
    email: '',
    content: ''
  });
  const [replyingTo, setReplyingTo] = useState<string | null>(null);

  const formatTimestamp = (timestamp: string) => {
    return new Date(timestamp).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.author || !newComment.email || !newComment.content) {
      toast.error('Veuillez remplir tous les champs');
      return;
    }

    const comment: Comment = {
      id: Date.now().toString(),
      author: newComment.author,
      email: newComment.email,
      content: newComment.content,
      timestamp: new Date().toISOString(),
      likes: 0,
      replies: []
    };

    setComments(prev => [comment, ...prev]);
    setNewComment({ author: '', email: '', content: '' });
    toast.success('Commentaire publié avec succès !');
  };

  const handleLike = (commentId: string) => {
    setComments(prev => 
      prev.map(comment => 
        comment.id === commentId 
          ? { ...comment, likes: comment.likes + 1 }
          : {
              ...comment,
              replies: comment.replies.map(reply =>
                reply.id === commentId
                  ? { ...reply, likes: reply.likes + 1 }
                  : reply
              )
            }
      )
    );
  };

  const handleReport = (commentId: string) => {
    toast.success('Commentaire signalé. Merci pour votre vigilance.');
  };

  const CommentComponent: React.FC<{ comment: Comment; isReply?: boolean }> = ({ comment, isReply = false }) => (
    <div className={`${isReply ? 'ml-8 border-l-2 border-gray-200 pl-4' : ''}`}>
      <div className="bg-gray-50 rounded-lg p-4 mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
              {comment.author.charAt(0).toUpperCase()}
            </div>
            <div>
              <span className="font-medium text-gray-900">{comment.author}</span>
              <span className="text-gray-500 text-sm ml-2">
                {formatTimestamp(comment.timestamp)}
              </span>
            </div>
          </div>
          {comment.isReported && (
            <Badge variant="destructive" className="text-xs">
              Signalé
            </Badge>
          )}
        </div>
        
        <p className="text-gray-700 mb-3">{comment.content}</p>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => handleLike(comment.id)}
            className="flex items-center gap-1 text-gray-500 hover:text-red-600 text-sm"
          >
            <ThumbsUp className="h-4 w-4" />
            {comment.likes}
          </button>
          {!isReply && (
            <button
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              className="flex items-center gap-1 text-gray-500 hover:text-red-600 text-sm"
            >
              <Reply className="h-4 w-4" />
              Répondre
            </button>
          )}
          <button
            onClick={() => handleReport(comment.id)}
            className="flex items-center gap-1 text-gray-500 hover:text-red-600 text-sm"
          >
            <Flag className="h-4 w-4" />
            Signaler
          </button>
        </div>
      </div>
      
      {/* Replies */}
      {comment.replies.map(reply => (
        <CommentComponent key={reply.id} comment={reply} isReply={true} />
      ))}
    </div>
  );

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center gap-2 mb-6">
        <MessageCircle className="h-5 w-5 text-red-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          Commentaires ({comments.length})
        </h3>
      </div>

      {/* Comment Form */}
      <form onSubmit={handleSubmitComment} className="mb-8 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-medium text-gray-900 mb-4">Laisser un commentaire</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Input
            placeholder="Votre nom *"
            value={newComment.author}
            onChange={(e) => setNewComment(prev => ({ ...prev, author: e.target.value }))}
            required
          />
          <Input
            type="email"
            placeholder="Votre email *"
            value={newComment.email}
            onChange={(e) => setNewComment(prev => ({ ...prev, email: e.target.value }))}
            required
          />
        </div>
        <textarea
          className="w-full p-3 border rounded-lg resize-none"
          rows={4}
          placeholder="Votre commentaire *"
          value={newComment.content}
          onChange={(e) => setNewComment(prev => ({ ...prev, content: e.target.value }))}
          required
        />
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-500">
            * Champs obligatoires. Votre email ne sera pas publié.
          </p>
          <Button type="submit" className="bg-red-600 hover:bg-red-700">
            Publier le commentaire
          </Button>
        </div>
      </form>

      {/* Comments List */}
      <div className="space-y-6">
        {comments.length === 0 ? (
          <p className="text-gray-500 text-center py-8">
            Soyez le premier à commenter cet article !
          </p>
        ) : (
          comments.map(comment => (
            <CommentComponent key={comment.id} comment={comment} />
          ))
        )}
      </div>
    </div>
  );
};

export default CommentSection;
