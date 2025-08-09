$folderPath = "D:\AnNK\Project\ANK TEAM\yensaohl\public\images\phukien"  # Change this to your folder path

# Get all files in the folder
$files = Get-ChildItem -Path $folderPath -File

# Initialize a counter
$counter = 1

foreach ($file in $files) {
    $extension = $file.Extension
    $newName = "{0}{1}" -f $counter, $extension
    $newPath = Join-Path -Path $folderPath -ChildPath $newName
    Rename-Item -Path $file.FullName -NewName $newPath
    $counter++
}
