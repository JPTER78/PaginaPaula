Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("c:\Users\asses\Desktop\paula\mini_mascot.png")
Write-Output "Width: $($img.Width), Height: $($img.Height)"
$img.Dispose()
