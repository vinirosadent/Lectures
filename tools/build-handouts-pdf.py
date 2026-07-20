#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Gera os PDFs paginados dos handouts a partir de cada lectures/NN-slug/handout.html.
- Usa WeasyPrint (respeita o @media print + @page do assets/css/handout.css).
- Saída: lectures/NN-slug/handout.pdf (mesmo nome, ao lado do HTML).
- Rode sempre que editar um handout:  python3 tools/build-handouts-pdf.py
Requer:  pip install weasyprint --break-system-packages
"""
import sys, glob, os
from weasyprint import HTML

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

def build():
    handouts = sorted(glob.glob(os.path.join(ROOT, "lectures", "*", "handout.html")))
    if not handouts:
        print("Nenhum handout.html encontrado."); return
    for h in handouts:
        out = os.path.splitext(h)[0] + ".pdf"
        HTML(filename=h).write_pdf(out)
        size = os.path.getsize(out) // 1024
        print(f"OK  {os.path.relpath(out, ROOT)}  ({size} KB)")

if __name__ == "__main__":
    build()
