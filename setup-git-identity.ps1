# Set Git user identity globally
$UserName = "Chanont Wankaew"
$UserEmail = "zynx.ai.thai@gmail.com"

Write-Host "⚙️ Setting Git global identity..."
git config --global user.name "$UserName"
git config --global user.email "$UserEmail"

Write-Host "✅ Git identity set:"
git config --global user.name
git config --global user.email
