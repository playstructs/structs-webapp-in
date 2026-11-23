"""The guild's badge and logo, in the style of webapp's SN Corp badge.

webapp's badge (public/img/logo-snc.gif) is 32x32 pixel art: "sn.c" in a
one-pixel box, in the interface's steel blue (115, 148, 165), shown at 192px
in sign-up with the motto over its lower rows (from row 23). This draws
गैलेक्सी एंड संस (Galaxy & Sons) the same way, above row 22: "G&S" in a box,
like a family firm's shop sign, with 1987 under it.

  - hi/public/hi/img/gns-badge.png: 192x192, sign-up's badge
  - hi/public/hi/img/gns-logo.png: 256x256, the guild's logo in guild.json

    python3 -m pip install pillow
    python3 hi/art/logo.py
"""
from pathlib import Path

from PIL import Image

OUT = Path(__file__).resolve().parents[1] / "public/hi/img"
COLOR = (115, 148, 165, 255)
GRID = 32

SIGN = [
    "........................",
    "..####....##.....#####..",
    ".#.......#..#...#.......",
    ".#.......#..#...#.......",
    ".#..##....##.....####...",
    ".#...#...#..#.#......#..",
    ".#...#...#...#.......#..",
    "..####....###.#.#####...",
    "........................",
]
YEAR = [
    ".#...##...##..###",
    "##..#..#.#..#...#",
    ".#...###..##...#.",
    ".#.....#.#..#..#.",
    "###..##...##...#.",
]
YEAR_TOP = 16


def draw(pixels, bitmap, left, top):
    for y, row in enumerate(bitmap):
        for x, char in enumerate(row):
            if char == "#":
                pixels[left + x, top + y] = COLOR


def badge():
    image = Image.new("RGBA", (GRID, GRID), (0, 0, 0, 0))
    pixels = image.load()
    width, height = len(SIGN[0]), len(SIGN)
    left, top = (GRID - width) // 2, 4
    for x in range(left - 1, left + width + 1):
        pixels[x, top - 1] = pixels[x, top + height] = COLOR
    for y in range(top - 1, top + height + 1):
        pixels[left - 1, y] = pixels[left + width, y] = COLOR
    draw(pixels, SIGN, left, top)
    draw(pixels, YEAR, (GRID - len(YEAR[0])) // 2, YEAR_TOP)
    return image


def main():
    OUT.mkdir(parents=True, exist_ok=True)
    image = badge()
    for name, size in (("gns-badge.png", 192), ("gns-logo.png", 256)):
        image.resize((size, size), Image.NEAREST).save(OUT / name, optimize=True)
        print(f"wrote {OUT / name}")


if __name__ == "__main__":
    main()
