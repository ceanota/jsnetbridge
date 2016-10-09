# Runs every time a package is uninstalled

param($installPath, $toolsPath, $package, $project)

# $installPath is the path to the folder where the package is installed.
# $toolsPath is the path to the tools directory in the folder where the package is installed.
# $package is a reference to the package object.
# $project is a reference to the project the package was installed to.

$projectFullName = $project.FullName
Write-Host "Deleting _bin folder to the root of the solution: $projectFullName"
 
$fileInfo = new-object -typename System.IO.FileInfo -ArgumentList $projectFullName
$projectDirectory = $fileInfo.DirectoryName

$destinationDirectory = "$projectDirectory\Generators\Diphap.JsNetBridge"
Write-Host $destinationDirectory

if(test-path $destinationDirectory -pathtype container)
{
Remove-Item -Recurse -Force $destinationDirectory
}
