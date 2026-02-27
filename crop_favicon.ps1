Add-Type -AssemblyName System.Drawing
$imgPath = "c:\Users\asses\Desktop\paula\mini_mascot.png"
$outPath = "c:\Users\asses\Desktop\paula\favicon.png"

$img = [System.Drawing.Image]::FromFile($imgPath)
$bmp = New-Object System.Drawing.Bitmap(400, 400)
$graph = [System.Drawing.Graphics]::FromImage($bmp)
$rect = New-Object System.Drawing.Rectangle(0, 0, 400, 400)
$srcRect = New-Object System.Drawing.Rectangle(120, 20, 400, 400)

$graph.DrawImage($img, $rect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

$graph.Dispose()
$bmp.Dispose()
$img.Dispose()
Write-Output "Favicon created successfully."
