# Runs every time a package is installed in a project

param($installPath, $toolsPath, $package, $project)

# $installPath is the path to the folder where the package is installed.
# $toolsPath is the path to the tools directory in the folder where the package is installed.
# $package is a reference to the package object.
# $project is a reference to the project the package was installed to.

$projectFullName = $project.FullName
Write-Host "Copying _bin folder to the root of the solution: $projectFullName"
 
$fileInfo = new-object -typename System.IO.FileInfo -ArgumentList $projectFullName
$projectDirectory = $fileInfo.DirectoryName

$sourceDirectory = "$installPath\_bin"

Write-Host $sourceDirectory
 
$destinationDirectory = "$projectDirectory\Generators\Diphap.JsNetBridge"
Write-Host $destinationDirectory

if(test-path $destinationDirectory -pathtype container)
{
Remove-Item -Recurse -Force $destinationDirectory
}

if(test-path $sourceDirectory -pathtype container)
{
 Write-Host "Copying files from $sourceDirectory to $destinationDirectory"
 robocopy $sourceDirectory $destinationDirectory /e /XO
}

Write-Host "Copying file readme.txt"
$sourceFile = "$installPath\readme.txt"
$destFile = "$projectDirectory\Scripts\Diphap.JsNetBridge"
Copy-Item -Force $sourceFile $destFile

Write-Host "Copying complete. $projectFullName"
