export function resizeListener(game)
{
    window.addEventListener('resize', () => {
        // Adapter la taille du renderer à la nouvelle taille de la fenêtre
        game.renderer.renderer.setSize(window.innerWidth, window.innerHeight);
        
        // Mettre à jour l'aspect ratio de la caméra
        game.camera.camera.aspect = window.innerWidth / window.innerHeight;

        // Nécessaire pour recalculer la projection
        game.camera.camera.updateProjectionMatrix(); 
    })
}