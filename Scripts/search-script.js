function performSearch() {
    let query = document.getElementById("searchInput").value.toLowerCase();

    if (query) {
        alert("Searching for: " + query);
        // Implement actual search logic here (e.g., filtering content)
    } else {
        alert("Please enter a search term.");
    }
}
