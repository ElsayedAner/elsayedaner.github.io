document.addEventListener("DOMContentLoaded", function() {
    // Normalizes the paths for consistent comparison
    function normalizePath(path) {
        return new URL(path, window.location.origin).pathname.replace(/\/$/, "");
    }

    // Retrieves the current path
    var currentPath = normalizePath(window.location.pathname);

    // Function to add the active class
    function activateLink(link) {
        link.classList.add('masthead__menu-item--active');
    }

    // Selects all links in the navigation menu
    var links = document.querySelectorAll('.masthead__menu-item a');

    links.forEach(function(link) {
        var linkPath = normalizePath(link.getAttribute('href'));

        // Check direct match for subpages and main pages
        if (currentPath === linkPath) {
            // Mark the direct link as active
            activateLink(link.parentElement);

            // Find and mark the parent menu item
            let ancestorMenu = link.closest('ul.submenu');
            if (ancestorMenu) {
                let parentLink = ancestorMenu.previousElementSibling;
                if (parentLink) {
                    activateLink(parentLink.parentElement);
                }
            }
        }
    });
});