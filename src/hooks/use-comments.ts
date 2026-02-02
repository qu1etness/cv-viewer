import { useCallback } from 'react';
import { useLocalStorage } from './use-local-storage';
import type { IComment } from '@/interfaces/comment';

const COMMENTS_KEY = 'cv_comments';

export const useComments = () => {
    const [comments, setComments] = useLocalStorage<IComment[]>(COMMENTS_KEY);

    const addComment = useCallback((text: string) => {
        const newComment: IComment = {
            id: crypto.randomUUID(),
            text,
            createdAt: new Date().toISOString(),
        };

        setComments((prev) => (prev ? [...prev, newComment] : [newComment]));
    }, [setComments]);

    const removeComment = useCallback((id: string) => {
        setComments((prev) => (prev ? prev.filter((c) => c.id !== id) : []));
    }, [setComments]);

    const clearComments = useCallback(() => {
        setComments([]);
    }, [setComments]);

    return {
        comments: comments || [],
        addComment,
        removeComment,
        clearComments,
    };
};