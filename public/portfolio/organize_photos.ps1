# Script de Organizacao de Fotos de Artesanato - COMPLETO
# Este script organiza as fotos da pasta portfolio em categorias baseadas na analise visual

$portfolioPath = "c:\Users\Gabriel\Desktop\AmordeRosa-Repositorio\public\portfolio"
$reportPath = Join-Path $portfolioPath "relatorio_organizacao.csv"

# Criar pastas de categorias
$categories = @("SANTOS_GESSO", "NATAL", "HALLOWEEN", "PASCOA", "MDF", "DIVERSOS")
foreach ($cat in $categories) {
    $catPath = Join-Path $portfolioPath $cat
    if (-not (Test-Path $catPath)) {
        New-Item -ItemType Directory -Path $catPath -Force | Out-Null
        Write-Host "Pasta criada: $cat" -ForegroundColor Green
    }
}

# Mapeamento de classificacao baseado na analise visual completa
# Formato: nome_arquivo -> [categoria, descricao, cor, confianca]
$classifications = @{
    # --- SANTOS_GESSO (imagens religiosas, santos, anjos, Divino, Nossa Senhora) ---
    "WhatsApp Image 2026-01-29 at 14.41.40.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "dourado", 0.95)
    "WhatsApp Image 2026-01-29 at 14.42.08.jpeg" = @("SANTOS_GESSO", "pomba_divino_espirito_santo", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 14.43.40.jpeg" = @("SANTOS_GESSO", "nossa_senhora_aparecida", "azul_dourado", 0.95)
    "WhatsApp Image 2026-01-29 at 14.44.18.jpeg" = @("SANTOS_GESSO", "nossa_senhora_aparecida_perolas", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 14.44.35.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 14.47.03.jpeg" = @("SANTOS_GESSO", "medalha_religiosa_mdf", "branco", 0.85)
    "WhatsApp Image 2026-01-29 at 14.48.45.jpeg" = @("SANTOS_GESSO", "anjo_gesso_orando", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 14.49.04.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 14.49.16.jpeg" = @("SANTOS_GESSO", "sagrada_familia_mini", "prateado", 0.85)
    "WhatsApp Image 2026-01-29 at 14.49.29.jpeg" = @("SANTOS_GESSO", "pomba_divino_perolas", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 14.49.49.jpeg" = @("SANTOS_GESSO", "nossa_senhora_aparecida", "azul_dourado", 0.95)
    "WhatsApp Image 2026-01-29 at 14.50.06.jpeg" = @("SANTOS_GESSO", "nossa_senhora_perolas", "branco_perola", 0.90)
    "WhatsApp Image 2026-01-29 at 14.50.22.jpeg" = @("SANTOS_GESSO", "nossa_senhora_aparecida_azul", "azul_dourado", 0.95)
    "WhatsApp Image 2026-01-29 at 14.50.37.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 14.54.11.jpeg" = @("SANTOS_GESSO", "anjo_gesso_dourado", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 14.56.44.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 14.57.16.jpeg" = @("SANTOS_GESSO", "sagrada_familia_retrato", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 14.57.52.jpeg" = @("SANTOS_GESSO", "nossa_senhora_branca", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 14.58.08.jpeg" = @("SANTOS_GESSO", "sagrada_familia_placa", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 14.59.16.jpeg" = @("SANTOS_GESSO", "nossa_senhora_perolas", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 14.59.47.jpeg" = @("SANTOS_GESSO", "anjo_gesso_prateado", "prateado", 0.85)
    "WhatsApp Image 2026-01-29 at 15.01.06.jpeg" = @("SANTOS_GESSO", "nossa_senhora_flores", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 15.02.45.jpeg" = @("SANTOS_GESSO", "anjos_gesso_coracao", "rose_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.03.22.jpeg" = @("SANTOS_GESSO", "nossa_senhora_perolas_grande", "branco_perola", 0.95)
    "WhatsApp Image 2026-01-29 at 15.05.05.jpeg" = @("SANTOS_GESSO", "nossa_senhora_aparecida_azul", "azul_dourado", 0.95)
    "WhatsApp Image 2026-01-29 at 15.05.22.jpeg" = @("SANTOS_GESSO", "sagrada_familia_perola", "perola_dourado", 0.85)
    "WhatsApp Image 2026-01-29 at 15.06.08.jpeg" = @("SANTOS_GESSO", "sagrada_familia_medalha", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.09.02.jpeg" = @("SANTOS_GESSO", "sao_bento_gesso", "dourado", 0.95)
    "WhatsApp Image 2026-01-29 at 15.10.36.jpeg" = @("SANTOS_GESSO", "anjos_gesso_trompete", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.12.55.jpeg" = @("SANTOS_GESSO", "nossa_senhora_aparecida", "azul_dourado", 0.95)
    "WhatsApp Image 2026-01-29 at 15.13.16.jpeg" = @("SANTOS_GESSO", "nossa_senhora_aparecida_grande", "azul_dourado", 0.95)
    "WhatsApp Image 2026-01-29 at 15.14.04.jpeg" = @("SANTOS_GESSO", "conjunto_santos_gesso", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.14.24.jpeg" = @("SANTOS_GESSO", "pomba_divino_espirito_santo", "branco_dourado", 0.95)
    "WhatsApp Image 2026-01-29 at 15.14.40.jpeg" = @("SANTOS_GESSO", "santa_ceia_gesso", "dourado", 0.95)
    "WhatsApp Image 2026-01-29 at 15.14.56.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.15.53.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 15.16.16.jpeg" = @("SANTOS_GESSO", "sagrada_familia_prateada", "prateado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.16.32.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.85)
    "WhatsApp Image 2026-01-29 at 15.17.25.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.19.01.jpeg" = @("SANTOS_GESSO", "sagrada_familia_quadro_perolas", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.19.20.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.85)
    "WhatsApp Image 2026-01-29 at 15.19.41.jpeg" = @("SANTOS_GESSO", "anjo_gesso_orando", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.20.58.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.85)
    "WhatsApp Image 2026-01-29 at 15.21.34.jpeg" = @("SANTOS_GESSO", "divino_espirito_santo_pendente", "dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.22.10.jpeg" = @("SANTOS_GESSO", "anjo_gesso", "branco_dourado", 0.85)
    "WhatsApp Image 2026-01-29 at 15.22.56.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.85)
    "WhatsApp Image 2026-01-29 at 15.23.10.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.23.26.jpeg" = @("SANTOS_GESSO", "anjo_gesso", "branco_dourado", 0.85)
    "WhatsApp Image 2026-01-29 at 15.24.07.jpeg" = @("SANTOS_GESSO", "nossa_senhora_perolas_igreja", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 15.25.50.jpeg" = @("SANTOS_GESSO", "nossa_senhora_flores", "branco", 0.95)
    "WhatsApp Image 2026-01-29 at 15.26.03.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.26.20.jpeg" = @("SANTOS_GESSO", "anjo_gesso", "branco_dourado", 0.85)
    "WhatsApp Image 2026-01-29 at 15.27.00.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.85)
    "WhatsApp Image 2026-01-29 at 15.27.14.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.27.36.jpeg" = @("SANTOS_GESSO", "anjo_gesso", "branco_dourado", 0.85)
    "WhatsApp Image 2026-01-29 at 15.28.00.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.85)
    "WhatsApp Image 2026-01-29 at 15.28.34.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.30.26.jpeg" = @("SANTOS_GESSO", "anjo_gesso_orando", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.31.18.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.85)
    "WhatsApp Image 2026-01-29 at 15.31.36.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 17.20.50.jpeg" = @("SANTOS_GESSO", "nossa_senhora_aparecida_perolas", "azul", 0.95)
    "WhatsApp Image 2026-01-29 at 17.20.53.jpeg" = @("SANTOS_GESSO", "nossa_senhora_branca_dourada", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 17.20.56.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso_terco", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 17.21.00.jpeg" = @("SANTOS_GESSO", "divino_perolas_pendente", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 17.21.10.jpeg" = @("SANTOS_GESSO", "nossa_senhora_aparecida_mdf", "azul", 0.90)
    "WhatsApp Image 2026-01-29 at 17.20.51.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.20.52 (1).jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.20.52.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.20.53 (1).jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.20.53 (2).jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.20.54.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.20.55.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.02.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.03 (1).jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.03.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.04 (1).jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.04.jpeg" = @("SANTOS_GESSO", "sagrada_familia_gesso", "branco_dourado", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.05.jpeg" = @("SANTOS_GESSO", "anjo_gesso", "branco_dourado", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.06 (1).jpeg" = @("SANTOS_GESSO", "anjo_gesso", "branco_dourado", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.06.jpeg" = @("SANTOS_GESSO", "anjo_gesso", "branco_dourado", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.07 (1).jpeg" = @("SANTOS_GESSO", "anjo_gesso", "branco_dourado", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.07.jpeg" = @("SANTOS_GESSO", "anjo_gesso", "branco_dourado", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.08.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.09.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.11.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.12.jpeg" = @("SANTOS_GESSO", "pomba_divino_perolas", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.13.jpeg" = @("SANTOS_GESSO", "pomba_divino_perolas", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.14.jpeg" = @("SANTOS_GESSO", "pomba_divino_perolas", "branco", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.16.jpeg" = @("SANTOS_GESSO", "quadro_religioso_mdf", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 15.13.28.jpeg" = @("SANTOS_GESSO", "nossa_senhora_gesso", "branco_dourado", 0.90)
    
    # --- NATAL ---
    "WhatsApp Image 2026-01-29 at 15.01.20.jpeg" = @("NATAL", "presepio_sagrada_familia", "bege_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.01.34.jpeg" = @("NATAL", "pinha_decorada_bolinhas", "marrom_vermelho", 0.95)
    "WhatsApp Image 2026-01-29 at 15.02.26.jpeg" = @("NATAL", "pinha_decorada_natalina", "marrom_vermelho", 0.95)
    "WhatsApp Image 2026-01-29 at 15.03.00.jpeg" = @("NATAL", "presepio_completo_dourado", "dourado", 0.95)
    "WhatsApp Image 2026-01-29 at 15.03.57.jpeg" = @("NATAL", "presepio_reis_magos", "branco_dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 15.04.09.jpeg" = @("NATAL", "sagrada_familia_mini_prata", "prateado", 0.85)
    "WhatsApp Image 2026-01-29 at 15.04.25.jpeg" = @("NATAL", "vila_natalina_mdf", "colorido", 0.90)
    "WhatsApp Image 2026-01-29 at 15.05.34.jpeg" = @("NATAL", "caixa_decorativa_natalina", "branco_vermelho", 0.85)
    "WhatsApp Image 2026-01-29 at 15.05.47.jpeg" = @("NATAL", "arvore_natal_mdf_presentes", "natural_mdf", 0.90)
    "WhatsApp Image 2026-01-29 at 15.06.42.jpeg" = @("NATAL", "presepio_colorido_cabana", "colorido", 0.90)
    "WhatsApp Image 2026-01-29 at 15.09.20.jpeg" = @("NATAL", "arvore_natal_mdf_estrelas", "verde", 0.95)
    "WhatsApp Image 2026-01-29 at 15.09.54.jpeg" = @("NATAL", "bolas_natalinas_religiosas", "colorido", 0.90)
    "WhatsApp Image 2026-01-29 at 15.13.48.jpeg" = @("NATAL", "reis_magos_gesso", "dourado", 0.90)
    "WhatsApp Image 2026-01-29 at 16.48.35.jpeg" = @("NATAL", "flores_poinsettia_vermelhas", "vermelho", 0.90)
    "WhatsApp Image 2026-01-29 at 16.51.20.jpeg" = @("NATAL", "pinhas_natalinas_estrela", "marrom", 0.95)
    "WhatsApp Image 2026-01-29 at 16.55.14.jpeg" = @("NATAL", "bolas_natalinas_tecido", "vermelho_verde", 0.95)
    "WhatsApp Image 2026-01-29 at 16.55.48.jpeg" = @("NATAL", "guirlanda_natal_flores", "vermelho_verde", 0.95)
    "WhatsApp Image 2026-01-29 at 16.56.11.jpeg" = @("NATAL", "tags_natalinas_kraft", "marrom_vermelho", 0.95)
    "WhatsApp Image 2026-01-29 at 17.03.21.jpeg" = @("NATAL", "anjos_mdf_natalinos", "rosa", 0.90)
    "WhatsApp Image 2026-01-29 at 17.04.01.jpeg" = @("NATAL", "flor_natal_xadrez", "vermelho_branco", 0.95)
    "WhatsApp Image 2026-01-29 at 17.04.35.jpeg" = @("NATAL", "bola_natal_tecido_xadrez", "vermelho_verde", 0.95)
    "WhatsApp Image 2026-01-29 at 17.05.00.jpeg" = @("NATAL", "pinha_verde_natal", "verde", 0.95)
    "a.jpeg" = @("NATAL", "presepio_anjo_sagrada_familia", "colorido", 0.90)

    # --- HALLOWEEN ---
    "WhatsApp Image 2026-01-29 at 16.49.15.jpeg" = @("HALLOWEEN", "potes_fantasma_decorativos", "branco_preto", 0.95)
    "WhatsApp Image 2026-01-29 at 16.49.29.jpeg" = @("HALLOWEEN", "decoracao_halloween_completa", "laranja_preto", 0.95)
    "WhatsApp Image 2026-01-29 at 16.49.44.jpeg" = @("HALLOWEEN", "guirlanda_halloween_morcegos", "laranja_preto", 0.95)
    "WhatsApp Image 2026-01-29 at 16.50.08.jpeg" = @("HALLOWEEN", "guirlanda_halloween_boo", "preto_laranja", 0.95)
    "WhatsApp Image 2026-01-29 at 16.53.12.jpeg" = @("HALLOWEEN", "guirlanda_halloween_caveira", "bege_preto", 0.95)
    "WhatsApp Image 2026-01-29 at 16.53.50.jpeg" = @("HALLOWEEN", "abobora_feltro_porta_guardanapo", "laranja_verde", 0.90)
    "WhatsApp Image 2026-01-29 at 16.54.17.jpeg" = @("HALLOWEEN", "quadro_morcegos_castelo_feltro", "preto_laranja", 0.95)
    "WhatsApp Image 2026-01-29 at 16.54.48.jpeg" = @("HALLOWEEN", "potes_boo_fantasma", "branco_preto", 0.95)
    
    # --- PASCOA ---
    "WhatsApp Image 2026-01-29 at 16.51.48.jpeg" = @("PASCOA", "potes_coelho_pascoa", "azul_verde", 0.95)
    "WhatsApp Image 2026-01-29 at 16.57.48.jpeg" = @("PASCOA", "coelho_feltro_porta", "branco_rosa", 0.95)
    "WhatsApp Image 2026-01-29 at 16.58.22.jpeg" = @("PASCOA", "coelhos_cenoura_feltro", "laranja_branco", 0.95)
    "WhatsApp Image 2026-01-29 at 16.58.45.jpeg" = @("PASCOA", "coelho_feltro_rosa", "branco_rosa", 0.95)
    "WhatsApp Image 2026-01-29 at 16.59.10.jpeg" = @("PASCOA", "cenouras_tecido_decorativas", "laranja_amarelo", 0.95)
    "WhatsApp Image 2026-01-29 at 16.59.37.jpeg" = @("PASCOA", "cenouras_tecido_xadrez", "laranja", 0.95)
    "WhatsApp Image 2026-01-29 at 17.00.44.jpeg" = @("PASCOA", "cenouras_tecido_coloridas", "colorido", 0.95)
    "WhatsApp Image 2026-01-29 at 17.01.07.jpeg" = @("PASCOA", "cenouras_tecido_cesta", "laranja", 0.95)
    "WhatsApp Image 2026-01-29 at 17.01.31.jpeg" = @("PASCOA", "coelhos_mdf_decorativos", "branco", 0.90)
    "WhatsApp Image 2026-01-29 at 17.02.16.jpeg" = @("PASCOA", "sacolinhas_coelho_pascoa", "rosa_amarelo", 0.95)
    "WhatsApp Image 2026-01-29 at 17.21.39.jpeg" = @("PASCOA", "decoracao_pascoa_coelho", "colorido", 0.90)
    "WhatsApp Image 2026-01-29 at 17.21.40.jpeg" = @("PASCOA", "decoracao_pascoa", "colorido", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.41.jpeg" = @("PASCOA", "decoracao_pascoa", "colorido", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.42.jpeg" = @("PASCOA", "decoracao_pascoa", "colorido", 0.80)
    
    # --- MDF ---
    "WhatsApp Image 2026-01-29 at 17.02.30.jpeg" = @("MDF", "porta_capsulas_nespresso", "vermelho", 0.85)
    "WhatsApp Image 2026-01-29 at 17.21.15.jpeg" = @("MDF", "quadro_mdf_anjo_oracao", "natural_mdf", 0.90)
    "WhatsApp Image 2026-01-29 at 17.21.25.jpeg" = @("MDF", "caixa_mdf_decorada_azul", "azul", 0.90)
    "WhatsApp Image 2026-01-29 at 17.21.35.jpeg" = @("MDF", "caixa_mdf_renda_divino", "bege", 0.85)
    "WhatsApp Image 2026-01-29 at 17.21.45.jpeg" = @("MDF", "quadro_mdf_aparecida_strass", "azul_turquesa", 0.90)
    "WhatsApp Image 2026-01-29 at 17.21.55.jpeg" = @("MDF", "caixas_mdf_vintage_decoradas", "marrom", 0.90)
    "WhatsApp Image 2026-01-29 at 16.56.38.jpeg" = @("MDF", "caixa_mdf_margaridas_cha", "rosa_floral", 0.85)
    "WhatsApp Image 2026-01-29 at 17.21.17.jpeg" = @("MDF", "caixa_mdf_decorada", "azul", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.18.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.19.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.20.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.21.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.22 (1).jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.22.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.23.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.24.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.26.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.27.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.28.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.29.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.30.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.31.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.32.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.33.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.34 (1).jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.34.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.36.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.37.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.38.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.43.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.44.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.46.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.47.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.48.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.49.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.50.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.51.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.52.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.53.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.54.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.56.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    "WhatsApp Image 2026-01-29 at 17.21.58.jpeg" = @("MDF", "caixa_mdf_decorada", "natural_mdf", 0.80)
    
    # --- DIVERSOS ---
    "WhatsApp Image 2026-01-29 at 16.48.53.jpeg" = @("DIVERSOS", "quadro_flores_tecido", "colorido", 0.65)
    "WhatsApp Image 2026-01-29 at 16.50.33.jpeg" = @("DIVERSOS", "artesanato_feltro_coracao", "colorido", 0.55)
    "WhatsApp Image 2026-01-29 at 16.50.51.jpeg" = @("DIVERSOS", "porta_guardanapo_natal", "branco_vermelho", 0.70)
    "WhatsApp Image 2026-01-29 at 16.52.09.jpeg" = @("DIVERSOS", "decoracao_festa_bela_fera", "colorido", 0.55)
    "WhatsApp Image 2026-01-29 at 16.52.52.jpeg" = @("DIVERSOS", "decoracao_festa_fazendinha", "azul_marrom", 0.55)
    "WhatsApp Image 2026-01-29 at 16.57.04.jpeg" = @("DIVERSOS", "bordado_bastidor_manuela", "colorido", 0.65)
    "WhatsApp Image 2026-01-29 at 16.57.27.jpeg" = @("DIVERSOS", "bordado_bastidor_arco_iris", "colorido", 0.65)
}

# Inicializar contadores
$counters = @{}
foreach ($cat in $categories) {
    $counters[$cat] = 0
}

# Inicializar relatorio CSV
$report = @()
$report += "arquivo_original,arquivo_novo,categoria,confianca_classificacao,descricao_detectada"

# Arquivos de baixa confianca
$lowConfidenceFiles = @()

# Processar cada arquivo
$allFiles = Get-ChildItem -Path $portfolioPath -File | Where-Object { 
    $_.Extension -match '\.(jpeg|jpg|png|webp)$' -and 
    $_.Name -ne "organize_photos.ps1" -and
    $_.Name -ne "relatorio_organizacao.csv"
}

foreach ($file in $allFiles) {
    $fileName = $file.Name
    
    if ($classifications.ContainsKey($fileName)) {
        $classification = $classifications[$fileName]
        $category = $classification[0]
        $description = $classification[1]
        $color = $classification[2]
        $confidence = $classification[3]
    } else {
        $category = "DIVERSOS"
        $description = "artesanato_nao_identificado"
        $color = "variado"
        $confidence = 0.50
    }
    
    if ($confidence -lt 0.60) {
        $category = "DIVERSOS"
        $lowConfidenceFiles += "$fileName (confianca: $confidence)"
    }
    
    $counters[$category]++
    $id = $counters[$category].ToString("D4")
    
    $extension = $file.Extension.ToLower()
    $newName = "{0}_{1}_{2}_unico_{3}{4}" -f $category.ToLower(), $description, $color, $id, $extension
    
    $destPath = Join-Path (Join-Path $portfolioPath $category) $newName
    
    try {
        Copy-Item -Path $file.FullName -Destination $destPath -Force
        Write-Host "Copiado: $fileName -> $category\$newName" -ForegroundColor Cyan
        $report += """$fileName"",""$newName"",""$category"",$confidence,""$description"""
    } catch {
        Write-Host "Erro ao copiar $fileName : $_" -ForegroundColor Red
    }
}

Write-Host ""
Write-Host "Nota: Arquivo de video foi ignorado (apenas imagens processadas)." -ForegroundColor Yellow

$report | Out-File -FilePath $reportPath -Encoding UTF8 -Force
Write-Host ""
Write-Host "===== RELATORIO SALVO EM: $reportPath =====" -ForegroundColor Green

Write-Host ""
Write-Host "===== RESUMO DA ORGANIZACAO =====" -ForegroundColor Yellow
Write-Host "Total de arquivos processados: $($allFiles.Count)" -ForegroundColor White
Write-Host ""
foreach ($cat in $categories) {
    Write-Host "$cat : $($counters[$cat]) arquivos" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "===== ARQUIVOS COM BAIXA CONFIANCA (< 0.60) =====" -ForegroundColor Red
if ($lowConfidenceFiles.Count -eq 0) {
    Write-Host "Nenhum arquivo com baixa confianca." -ForegroundColor Green
} else {
    foreach ($lowFile in $lowConfidenceFiles) {
        Write-Host "  - $lowFile" -ForegroundColor Yellow
    }
}

Write-Host ""
Write-Host "Organizacao concluida!" -ForegroundColor Green
