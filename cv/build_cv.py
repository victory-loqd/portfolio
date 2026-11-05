from docx import Document
from docx.shared import Inches, Pt, RGBColor
from docx.enum.text import WD_ALIGN_PARAGRAPH, WD_TAB_ALIGNMENT
from docx.enum.table import WD_CELL_VERTICAL_ALIGNMENT
from docx.oxml import OxmlElement
from docx.oxml.ns import qn

OUT = 'Victory_Chukwuma_Product_Designer_CV_Final.docx'
FONT = 'Liberation Sans'
INK = RGBColor(20, 24, 29)
MUTED = RGBColor(86, 94, 103)
ACCENT = RGBColor(27, 71, 111)
SOFT = 'EAF0F5'

doc = Document()
section = doc.sections[0]
section.page_width = Inches(8.5)
section.page_height = Inches(11)
section.top_margin = Inches(0.45)
section.bottom_margin = Inches(0.42)
section.left_margin = Inches(0.62)
section.right_margin = Inches(0.62)

normal = doc.styles['Normal']
normal.font.name = FONT
normal._element.rPr.rFonts.set(qn('w:eastAsia'), FONT)
normal.font.size = Pt(9.55)
normal.font.color.rgb = INK
normal.paragraph_format.space_after = Pt(1.5)
normal.paragraph_format.line_spacing = 1.02

def run(p, text, bold=False, size=None, color=INK, italic=False):
    r = p.add_run(text)
    r.bold = bold
    r.italic = italic
    r.font.name = FONT
    r._element.rPr.rFonts.set(qn('w:eastAsia'), FONT)
    r.font.color.rgb = color
    if size:
        r.font.size = Pt(size)
    return r

def shade(cell, fill):
    tcPr = cell._tc.get_or_add_tcPr()
    shd = OxmlElement('w:shd')
    shd.set(qn('w:fill'), fill)
    tcPr.append(shd)

def margins(cell, top=80, start=100, bottom=80, end=100):
    tc = cell._tc.get_or_add_tcPr()
    tcMar = OxmlElement('w:tcMar')
    tc.append(tcMar)
    for edge, val in [('top', top), ('start', start), ('bottom', bottom), ('end', end)]:
        node = OxmlElement('w:' + edge)
        node.set(qn('w:w'), str(val))
        node.set(qn('w:type'), 'dxa')
        tcMar.append(node)

def section_heading(text):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(5.5)
    p.paragraph_format.space_after = Pt(2.4)
    p.paragraph_format.keep_with_next = True
    run(p, text.upper(), True, 8.5, ACCENT)

def role(title, organization, dates, description):
    p = doc.add_paragraph()
    p.paragraph_format.space_before = Pt(2.8)
    p.paragraph_format.space_after = Pt(0.4)
    p.paragraph_format.tab_stops.add_tab_stop(Inches(7.22), WD_TAB_ALIGNMENT.RIGHT)
    p.paragraph_format.keep_with_next = True
    run(p, title, True, 9.7)
    run(p, '  |  ' + organization, False, 9.7, MUTED)
    run(p, '\t' + dates, True, 8.8, ACCENT)
    bullet(description)

def bullet(text):
    p = doc.add_paragraph(style='List Bullet')
    p.paragraph_format.left_indent = Inches(0.18)
    p.paragraph_format.first_line_indent = Inches(-0.12)
    p.paragraph_format.space_after = Pt(0.8)
    run(p, text, False, 9.2, INK)

p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(0.5)
run(p, 'VICTORY CHUKWUMA', True, 23, INK)

p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(4)
run(p, 'Product Designer  |  0 to 1 Products, Complex Workflows and Design Systems', True, 10.2, ACCENT)

p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(3.5)
run(p, 'Lagos, Nigeria  |  +234 810 625 8307  |  victorychukwuma2@gmail.com  |  designwithvee.framer.website  |  linkedin.com/in/victory-chukwuma', False, 8.2, MUTED)

section_heading('Profile')
p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(1)
run(p, 'Product designer at Skydd and founder of LOQD combining strategic product thinking, end-to-end ownership and hands-on UX and UI craft across consumer, fintech, safety and operational products. Works cross-functionally from research and problem definition through prototypes, scalable interface systems and developer-ready delivery.')

section_heading('Experience')
role('Product Designer', 'Skydd', 'Jul 2025 - Present', 'Shaped a consumer financial-protection experience that brings saving and protection into one clear proposition for Nigerians.')
bullet('Designed the waitlist journey that attracted 100+ sign-ups and converted 95% of visitors into prospective users.')
bullet('Owned 3 connected website journeys from problem definition to responsive UI: Home, FAQ and About, simplifying complex product and trust messaging.')
bullet('Extended 5 design-system foundations: typography, colour, buttons, grid and components, improving visual consistency and cross-functional developer handoff.')

role('Founder', 'LOQD', 'Apr 2026 - Present', 'Defined product strategy and service design for an event-based belongings storage and custody venture.')
bullet('Led 9 attendee interviews and translated findings on trust, pricing, access and retrieval speed into product strategy, service requirements and pilot decisions.')
bullet('Designed the end-to-end service and digital MVP across customer, counter and runner experiences, including offline fallbacks, four custody checkpoints, operational metrics and a modular 125-space model.')

role('Co-Founder and Product Designer', 'Juju Games', 'May 2023 - Present', 'Co-founded the studio and led interface design across Vodou: A Space Odyssey, Boju Boju and Payton Ville, covering HUDs, inventory, quests and reusable visual systems.')
role('Product Designer', 'The Cypha', 'Feb 2024 - Feb 2025', "Designed SKRHYB's dual-user CMS and dashboard, led GLOBLSERVICE product design and created a reusable system spanning 3 platforms.")

p = doc.add_paragraph()
p.paragraph_format.space_before = Pt(2.5)
p.paragraph_format.space_after = Pt(0)
run(p, 'Earlier experience: ', True, 9.2)
run(p, 'Product Designer, Vroom Ng (2023-2024)  |  Product Designer, Hydrogen HR (2023)', False, 9.2, MUTED)

section_heading('Selected product work')
p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(0.4)
run(p, 'MEELOW', True, 9.2, ACCENT)
run(p, '  Defined product architecture and end-to-end mobile flows across 9 safety, fintech and operational areas, including Smart Check-In, live monitoring, geofencing, escalation, wallet, payments and administration.', False, 9.2)
p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(0.5)
run(p, 'COUPON', True, 9.2, ACCENT)
run(p, '  Designed and audited consumer and admin fintech flows across 7 product domains, including investments, KYC, transactions and withdrawals; resolved conditional paths, duplicate screens, system states and error recovery.', False, 9.2)

section_heading('Skills')
p = doc.add_paragraph()
p.paragraph_format.space_after = Pt(0)
run(p, 'Strategic product thinking  |  End-to-end ownership  |  Cross-functional collaboration  |  UX and UI design  |  Visual design  |  Product discovery  |  User interviews  |  Information architecture  |  Interaction design  |  Prototyping  |  Usability testing  |  Design systems  |  Service design  |  Responsive web and mobile  |  Design reviews  |  Developer handoff  |  Figma  |  FigJam  |  Framer  |  HTML/CSS', False, 8.55)

props = doc.core_properties
props.title = 'Victory Chukwuma CV'
props.subject = 'Product design and founder experience'
props.author = 'Victory Chukwuma'

doc.save(OUT)
print(OUT)
