<#  ============================================================================
    copy-figures-03.ps1
    ----------------------------------------------------------------------------
    O que faz: copia as figuras da SUA pasta "Assets" (Google Drive) para dentro
    do repositório, JÁ RENOMEANDO para os nomes que a Aula 03 espera.

    Como usar (o jeito mais simples):
      1) Clique com o botão direito neste arquivo > "Run with PowerShell"
         (ou abra o PowerShell e rode:  .\tools\copy-figures-03.ps1 )
      2) Se ele não achar sua pasta sozinho, vai abrir uma janelinha para você
         escolher a pasta "Assets" (onde estão os PNG). Selecione e clique OK.
      3) Pronto: as 17 figuras vão para
         lectures\03-polymerisation-and-polymers\assets  com os nomes certos.

    Você NÃO precisa editar nada. Se preferir, pode passar a pasta na mão:
      .\tools\copy-figures-03.ps1 -Source "G:\Meu Drive\...\Assets"
    ============================================================================ #>

param(
  [string]$Source = "",
  [string]$Dest   = ""
)

# --- Mapa: NOME NO SEU DRIVE  ->  NOME NO REPOSITÓRIO -----------------------
$map = [ordered]@{
  "Polymerization shrinkage 1.png"          = "shrinkage-1-molecular-mechanism.png"
  "Polymerization shrinkage 2.png"          = "shrinkage-2-why-dental.png"
  "Polymerization shrinkage 3.png"          = "shrinkage-3-stress-development.png"
  "Polymerization shrinkage 4.png"          = "shrinkage-4-clinical-consequences.png"
  "Plasticization.png"                      = "plasticization.png"
  "Molecular weight.png"                    = "molecular-weight-concept.png"
  "Molecular weight 2.png"                  = "molecular-weight-ethylene-example.png"
  "Addition polymerization.png"             = "addition-polymerization.png"
  "Condensation polymerization.png"         = "condensation-polymerization.png"
  "Free-radical polymerization.png"         = "free-radical-overview.png"
  "Free-radical polymerization chemistry.png" = "free-radical-chemistry.png"
  "Crosslinking.png"                        = "crosslinking.png"
  "Copolymer.png"                           = "copolymer-random-block-graft.png"
  "Homopolymer.png"                         = "homopolymer-linear-branched.png"
  "Tertopolymer example.png"                = "terpolymer-mma-ema-pma.png"
  "Copolymer example.png"                   = "copolymer-methacrylate-example.png"
  "Polymer - simplified reaction.png"       = "copolymer-mma-ema-formula.png"
}

# --- 1. Descobrir a pasta de DESTINO (relativa a este script) --------------
if ([string]::IsNullOrWhiteSpace($Dest)) {
  $Dest = Join-Path $PSScriptRoot "..\lectures\03-polymerisation-and-polymers\assets"
}
$Dest = [System.IO.Path]::GetFullPath($Dest)
if (-not (Test-Path $Dest)) { New-Item -ItemType Directory -Path $Dest -Force | Out-Null }

# --- 2. Descobrir a pasta de ORIGEM ----------------------------------------
# Tenta alguns caminhos comuns do Google Drive; se falhar, abre um seletor.
if ([string]::IsNullOrWhiteSpace($Source) -or -not (Test-Path $Source)) {
  $candidates = @(
    "G:\My Drive\NUS\Lectures\New lectures\Polymers and polymerization\Assets",
    "G:\Meu Drive\NUS\Lectures\New lectures\Polymers and polymerization\Assets",
    (Join-Path $env:USERPROFILE "My Drive\NUS\Lectures\New lectures\Polymers and polymerization\Assets"),
    (Join-Path $env:USERPROFILE "Google Drive\NUS\Lectures\New lectures\Polymers and polymerization\Assets")
  )
  $Source = $candidates | Where-Object { Test-Path $_ } | Select-Object -First 1

  if ([string]::IsNullOrWhiteSpace($Source)) {
    Write-Host "Nao encontrei a pasta automaticamente. Escolha a pasta 'Assets' na janela..." -ForegroundColor Yellow
    Add-Type -AssemblyName System.Windows.Forms
    $dlg = New-Object System.Windows.Forms.FolderBrowserDialog
    $dlg.Description = "Selecione a pasta 'Assets' com as figuras (PNG) da aula de polimeros"
    if ($dlg.ShowDialog() -eq [System.Windows.Forms.DialogResult]::OK) { $Source = $dlg.SelectedPath }
  }
}

if ([string]::IsNullOrWhiteSpace($Source) -or -not (Test-Path $Source)) {
  Write-Host "ERRO: pasta de origem nao definida. Rode de novo e selecione a pasta 'Assets'." -ForegroundColor Red
  exit 1
}

Write-Host ""
Write-Host "Origem : $Source"
Write-Host "Destino: $Dest"
Write-Host ("-" * 60)

# --- 3. Copiar + renomear ---------------------------------------------------
$ok = 0; $miss = 0
foreach ($src in $map.Keys) {
  $srcPath = Join-Path $Source $src
  $dstPath = Join-Path $Dest  $map[$src]
  if (Test-Path $srcPath) {
    Copy-Item -Path $srcPath -Destination $dstPath -Force
    Write-Host ("  OK   {0,-42} -> {1}" -f $src, $map[$src]) -ForegroundColor Green
    $ok++
  } else {
    Write-Host ("  FALTA {0,-42} (nao encontrada na origem)" -f $src) -ForegroundColor DarkYellow
    $miss++
  }
}

Write-Host ("-" * 60)
Write-Host ("Concluido: {0} copiadas, {1} faltando." -f $ok, $miss) -ForegroundColor Cyan
if ($miss -gt 0) {
  Write-Host "As faltantes provavelmente tem nome diferente no seu Drive." -ForegroundColor DarkYellow
  Write-Host "Renomeie na origem OU copie manualmente para a pasta de destino usando o mapa acima." -ForegroundColor DarkYellow
}
Write-Host ""
Write-Host "Agora abra lectures\03-polymerisation-and-polymers\index.html no navegador." -ForegroundColor Cyan
