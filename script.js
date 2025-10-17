// script.js
document.addEventListener('DOMContentLoaded', function() {
    // ===== MENU MOBILE =====
    // Sélection des éléments du menu mobile
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // Gestion du clic sur le menu hamburger
    hamburger.addEventListener('click', function() {
        // Basculer la classe 'active' pour afficher/masquer le menu
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fermer le menu mobile quand on clique sur un lien
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // ===== SYSTÈME D'ONGLETS =====
    const tabs = document.querySelectorAll('.tab');
    const tabPanels = document.querySelectorAll('.tab-panel');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Récupérer l'ID de l'onglet cible
            const targetTab = this.getAttribute('data-tab');
            
            // Désactiver tous les onglets
            tabs.forEach(t => t.classList.remove('active'));
            tabPanels.forEach(panel => panel.classList.remove('active'));
            
            // Activer l'onglet cliqué
            this.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
        });
    });
    
    // ===== ANIMATION AU DÉFILEMENT =====
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            // Ajouter une classe quand l'élément devient visible
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1 // Déclencher quand 10% de l'élément est visible
    });
    
    // Observer toutes les sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        observer.observe(section);
    });
    
    // ===== EFFET SUR LA NAVIGATION AU DÉFILEMENT =====
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        
        // Réduire la navbar quand on scroll
        if (window.scrollY > 100) {
            navbar.style.padding = '10px 0';
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        } else {
            navbar.style.padding = '20px 0';
            navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
        }
    });
});