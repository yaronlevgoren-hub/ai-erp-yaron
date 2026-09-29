# deploy_github.ps1 - Automated GitHub deployment for AI-ERP Final Project

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$workspace = "c:\Users\MC\Documents\Antigravity\JB final project Antigravity"
Set-Location -Path $workspace

Write-Host ">>> 1. Ensuring clean workflow filenames..." -ForegroundColor Cyan
if (Test-Path "$workspace\workflows") {
    $wfFiles = Get-ChildItem -Path "$workspace\workflows" -File
    foreach ($f in $wfFiles) {
        if ($f.Name -match "1 - Leads") {
            Copy-Item -Path $f.FullName -Destination "$workspace\workflows\01-leads-airtable.json" -Force
        }
        elseif ($f.Name -match "2 - Sales") {
            Copy-Item -Path $f.FullName -Destination "$workspace\workflows\02-sales-cold-emails.json" -Force
        }
        elseif ($f.Name -match "3 - Policies") {
            Copy-Item -Path $f.FullName -Destination "$workspace\workflows\03-policies-embedding.json" -Force
        }
        elseif ($f.Name -match "4 - Products") {
            Copy-Item -Path $f.FullName -Destination "$workspace\workflows\04-products-embedding.json" -Force
        }
    }
}

Write-Host ">>> 2. Ensuring mock/policies has all 12 policy files..." -ForegroundColor Cyan
if (-not (Test-Path "$workspace\mock\policies")) {
    New-Item -ItemType Directory -Path "$workspace\mock\policies" -Force | Out-Null
}
if (Test-Path "$workspace\data\policies") {
    Copy-Item -Path "$workspace\data\policies\*.md" -Destination "$workspace\mock\policies\" -Force
}

Write-Host ">>> 3. Initializing Git repository..." -ForegroundColor Cyan
if (-not (Test-Path "$workspace\.git")) {
    git init
}

git config user.name "Yaron Levgoren"
git config user.email "yaron.levgoren@gmail.com"
git branch -M main

Write-Host ">>> 4. Configuring remote origin..." -ForegroundColor Cyan
$existingRemote = git remote get-url origin 2>$null
if (-not $existingRemote) {
    git remote add origin https://github.com/yaronlevgoren-hub/ai-erp-yaron.git
} else {
    git remote set-url origin https://github.com/yaronlevgoren-hub/ai-erp-yaron.git
}

Write-Host ">>> 5. Staging files and creating commit..." -ForegroundColor Cyan
git add -A
git status --short
git commit -m "Initial commit: Complete AI-ERP system for John Bryce final project"

Write-Host ">>> 6. Pushing to GitHub main branch..." -ForegroundColor Cyan
git push -u origin main

Write-Host ">>> DONE! Repository is live at: https://github.com/yaronlevgoren-hub/ai-erp-yaron" -ForegroundColor Green
