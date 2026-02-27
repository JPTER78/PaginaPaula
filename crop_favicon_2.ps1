Add-Type -AssemblyName System.Drawing
$imgPath = "c:\Users\asses\Desktop\paula\mini_mascot.png"
$outPath = "c:\Users\asses\Desktop\paula\favicon.png"
$previewPath = "C:\Users\asses\.gemini\antigravity\brain\3963ccc3-6f1f-4267-9da9-433a52932ee7\favicon_preview.png"

$img = [System.Drawing.Image]::FromFile($imgPath)
$bmp = New-Object System.Drawing.Bitmap(250, 250)
$graph = [System.Drawing.Graphics]::FromImage($bmp)
$rect = New-Object System.Drawing.Rectangle(0, 0, 250, 250)
$srcRect = New-Object System.Drawing.Rectangle(195, 50, 250, 250)

$graph.DrawImage($img, $rect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$bmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)

$graph.Dispose()
$bmp.Dispose()
$img.Dispose()

Copy-Item $outPath $previewPath -Force
Write-Output "Favicon recropped successfully."
