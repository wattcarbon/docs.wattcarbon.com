document.addEventListener('DOMContentLoaded', function() {
    async function fetchMarkdown(path) {
        try {
            // Handle both absolute and relative paths
            const fullPath = path.startsWith('/') ? path.slice(1) : path;
            const response = await fetch(fullPath);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const text = await response.text();
            return text;
        } catch (error) {
            console.error('Error loading markdown:', error);
            return '# Error\nFailed to load document.';
        }
    }

    async function loadContent(docPath) {
        const content = await fetchMarkdown(docPath);
        document.getElementById('content').innerHTML = marked.parse(content);
        
        // Update active state in sidebar
        document.querySelectorAll('.sidebar-a').forEach(a => {
            a.classList.remove('active');
        });
        document.querySelector(`[data-doc="${docPath}"]`).classList.add('active');
        
        // Update URL hash
        window.location.hash = encodeURIComponent(docPath);
    }

    // Add click handlers to sidebar links
    document.querySelectorAll('.sidebar-a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const docPath = e.target.dataset.doc;
            loadContent(docPath);
        });
    });

    // Load README.md by default or the hashed document
    const initialDoc = decodeURIComponent(window.location.hash.slice(1)) || 'README.md';
    loadContent(initialDoc);
});
