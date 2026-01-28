import React from 'react';
import { Navigate } from 'react-router-dom';
import { loadProgress } from '../types/storage';

type ProtectedRouteProps = {
    children: React.ReactNode;
    requiredMinigames?: string[];
    currentMinigame?: string;
};

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
    children,
    requiredMinigames = [],
    currentMinigame
}) => {
    const progress = loadProgress();
    const completedMinigames = progress?.completedMinigames || [];

    const hasCompletedRequired = requiredMinigames.every(
        (minigame) => completedMinigames.includes(minigame)
    );

    const alreadyCompleted = currentMinigame && completedMinigames.includes(currentMinigame);

    if (!hasCompletedRequired || alreadyCompleted) {
        if (progress?.currentPath) {
            return <Navigate to={progress.currentPath} replace />;
        }
        return <Navigate to="/" replace />;
    }

    return <>{children}</>;
};

export default ProtectedRoute;
