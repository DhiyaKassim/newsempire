// Array to store links
const links = [];
// Preloaded sample links
links.push(
    {
        title: "The New York Times",
        url: "https://www.nytimes.com",
        author: "NYT Staff"
    },
    {
        title: "BBC News",
        url: "https://www.bbc.com/news",
        author: "BBC"
    },
    {
        title: "Al Jazeera",
        url: "https://www.aljazeera.com",
        author: "AJ News Team"
    }
);

// Function to show the main menu
function showMenu() {
    let choice;
    do {
        choice = prompt(
            "Choose an action:\n1. Show links\n2. Add a link\n3. Remove a link\n4. Quit"
        );
        switch (choice) {
            case "1":
                showLinks();
                break;
            case "2":
                addLink();
                break;
            case "3":
                removeLink();
                break;
            case "4":
                alert("Goodbye!");
                break;
            default:
                alert("Please enter a valid option (1-4).");
        }
    } while (choice !== "4");
}

// Function to show the list of links
function showLinks() {
    if (links.length === 0) {
        alert("No links to display.");
    } else {
        let message = "Links:\n";
        links.forEach((link, index) => {
            message += `${index + 1}: ${link.title} (${link.url}) by ${link.author}\n`;
        });
        alert(message);
    }
}

// Function to add a new link
function addLink() {
    const title = prompt("Enter link title:");
    let url = prompt("Enter link URL:");
    const author = prompt("Enter author name:");

    if (!url.startsWith("http://") && !url.startsWith("https://")) {
        url = "http://" + url;
    }

    links.push({ title, url, author });
    alert("Link added successfully!");
}

// Function to remove a link
function removeLink() {
    if (links.length === 0) {
        alert("No links to remove.");
        return;
    }

    let index;
    do {
        index = prompt(`Enter the index (1 to ${links.length}) of the link to remove:`);
        index = Number(index) - 1;
    } while (isNaN(index) || index < 0 || index >= links.length);

    links.splice(index, 1);
    alert("Link removed successfully!");
}
// Preloaded sample links
links.push(
    {
        title: "The New York Times",
        url: "https://www.nytimes.com",
        author: "NYT Staff"
    },
    {
        title: "BBC News",
        url: "https://www.bbc.com/news",
        author: "BBC"
    },
    {
        title: "Al Jazeera",
        url: "https://www.aljazeera.com",
        author: "AJ News Team"
    }
);

// Start the app
showMenu();


