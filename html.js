<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Download Center</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }
        h1 {
            color: #333;
        }
        .file-list {
            list-style-type: none;
            padding: 0;
        }
        .file-list li {
            margin: 10px 0;
        }
        a {
            text-decoration: none;
            color: #007bff;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <h1>My Download Center</h1>
    <p>Click on any file below to download:</p>
    <ul class="file-list" id="fileList">
        <!-- JavaScript will dynamically load files here -->
    </ul>

    <script>
        // List of files (URLs on your GitHub repository)
        const files = [
            { name: "dino dino high graphics(EXE)", url: "C:\Users\DELL\Desktop\page\files" },
            { name: "Ebook (PDF)", url: "files/ebook.pdf" },
            { name: "Compressed File (ZIP)", url: "files/archive.zip" },
            { name: "Presentation (PPT)", url: "files/presentation.ppt" },
            { name: "Image (PNG)", url: "files/image.png" },
        ];

        // Get the file list container
        const fileList = document.getElementById("fileList");

        // Dynamically add files to the list
        files.forEach(file => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.textContent = file.name;
            link.href = file.url;
            link.download = file.name; // Optional: Force download
            listItem.appendChild(link);
            fileList.appendChild(listItem);
        });
    </script>
</body>
</html>
