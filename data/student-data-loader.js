// Convert flat data structure into organized student data
const rawData = [
  // Student LAW2023001 - Semester 1
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 1,
      "course_code": "LLB102",
      "course_title": "Law of Contract",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131001",
      "name": "Sarah Islam",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Summer 2023",
      "semester": 1,
      "course_code": "LLB102",
      "course_title": "Law of Contract",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131001",
      "name": "Sarah Islam",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Summer 2023",
      "semester": 1,
      "course_code": "LLB103",
      "course_title": "Constitutional Law",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Fatima Akter",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2022",
      "semester": 1,
      "course_code": "LLB101",
      "course_title": "Jurisprudence",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Fatima Akter",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2022",
      "semester": 1,
      "course_code": "LLB102",
      "course_title": "Law of Contract",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Fatima Akter",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2022",
      "semester": 1,
      "course_code": "LLB103",
      "course_title": "Constitutional Law",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Fatima Akter",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2022",
      "semester": 2,
      "course_code": "LLB201",
      "course_title": "Criminal Law",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Fatima Akter",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2022",
      "semester": 2,
      "course_code": "LLB202",
      "course_title": "Law of Tort",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Fatima Akter",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2022",
      "semester": 2,
      "course_code": "LLB203",
      "course_title": "Muslim Law",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Fatima Akter",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2022",
      "semester": 2,
      "course_code": "LLB204",
      "course_title": "Administrative Law",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 1,
      "course_code": "LLB101",
      "course_title": "Jurisprudence and Legal Theory",
      "credit_hours": 3,
      "grade": "C",
      "grade_point": 2.4
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 2,
      "course_code": "LLB201",
      "course_title": "Constitutional Law of Bangladesh",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 2,
      "course_code": "LLB202",
      "course_title": "Muslim Law-II",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 2,
      "course_code": "LLB203",
      "course_title": "Law of Tort",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 3,
      "course_code": "LL-301",
      "course_title": "Criminal Law-I (Penal Code)",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 3,
      "course_code": "LL-2021",
      "course_title": "Land Laws of Bangladesh-I",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 3,
      "course_code": "LL-2229",
      "course_title": "Equity and Trust Law",
      "credit_hours": 3,
      "grade": "B",
      "grade_point": 3.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 4,
      "course_code": "LLB401",
      "course_title": "Criminal Law-II (Criminal Procedure Code)",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 4,
      "course_code": "LLB402",
      "course_title": "Land Laws of Bangladesh-II",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 4,
      "course_code": "LLB403",
      "course_title": "Administrative Law",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 4,
      "course_code": "LLB404",
      "course_title": "Laws of Evidence",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 5,
      "course_code": "LLB501",
      "course_title": "Civil Procedure Code & Public Interest Litigation",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 5,
      "course_code": "LLB502",
      "course_title": "Drafting Pleading & Conveyancing",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 5,
      "course_code": "LLB503",
      "course_title": "Labour & Industrial Law",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 6,
      "course_code": "LLB601",
      "course_title": "Public International Law",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 6,
      "course_code": "LLB602",
      "course_title": "Intellectual Property Laws",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 6,
      "course_code": "LLB603",
      "course_title": "Banking Laws & Insurance",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 7,
      "course_code": "LLB701",
      "course_title": "Environmental Law & Climate Change",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 7,
      "course_code": "LLB702",
      "course_title": "International Human Rights Law",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 7,
      "course_code": "LLB703",
      "course_title": "Alternative Dispute Resolution",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 8,
      "course_code": "LLB801",
      "course_title": "Cyber Law & Digital Security",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 8,
      "course_code": "LLB802",
      "course_title": "Legal Research & Moot Court",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 8,
      "course_code": "LLB803",
      "course_title": "Professional Ethics & Court Etiquette",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 9,
      "course_code": "LLB901",
      "course_title": "International Law",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 9,
      "course_code": "LLB902",
      "course_title": "Criminology & Penology",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 9,
      "course_code": "LLB903",
      "course_title": "Law of Taxation",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 10,
      "course_code": "LLB1001",
      "course_title": "Constitutional Law of USA & UK",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 10,
      "course_code": "LLB1002",
      "course_title": "Maritime Law",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 10,
      "course_code": "LLB1003",
      "course_title": "Medical Jurisprudence",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 11,
      "course_code": "LLB1101",
      "course_title": "Law of International Organizations",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 11,
      "course_code": "LLB1102",
      "course_title": "Competition Law",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 12,
      "course_code": "LLB1201",
      "course_title": "Dissertation/Thesis",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 12,
      "course_code": "LLB1202",
      "course_title": "Clinical Legal Education",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131003",
      "name": "Karim Ahmed",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2024",
      "semester": 1,
      "course_code": "LLB101",
      "course_title": "Jurisprudence and Legal Theory",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131003",
      "name": "Karim Ahmed",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2024",
      "semester": 1,
      "course_code": "LLB102",
      "course_title": "Law of Contract and Partnership",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131003",
      "name": "Karim Ahmed",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2024",
      "semester": 1,
      "course_code": "LLB103",
      "course_title": "Muslim Law-I",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131004",
      "name": "Nusrat Jahan",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2022",
      "semester": 3,
      "course_code": "LLB301",
      "course_title": "Criminal Law-I",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131004",
      "name": "Nusrat Jahan",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2022",
      "semester": 3,
      "course_code": "LLB302",
      "course_title": "Land Laws of Bangladesh-I",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131004",
      "name": "Nusrat Jahan",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2022",
      "semester": 3,
      "course_code": "LLB303",
      "course_title": "Company Law",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131004",
      "name": "Nusrat Jahan",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2022",
      "semester": 3,
      "course_code": "LLB304",
      "course_title": "Equity and Trust Law",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131005",
      "name": "Rahul Das",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2021",
      "semester": 6,
      "course_code": "LLB601",
      "course_title": "Public International Law",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131005",
      "name": "Rahul Das",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2021",
      "semester": 6,
      "course_code": "LLB602",
      "course_title": "Intellectual Property Laws",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131005",
      "name": "Rahul Das",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2021",
      "semester": 6,
      "course_code": "LLB603",
      "course_title": "Banking Laws & Insurance",
      "credit_hours": 3,
      "grade": "B",
      "grade_point": 3.0
    },
    {
      "student_id": "582310008131002",
      "name": "Aisha Khan",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Summer 2023",
      "semester": 2,
      "course_code": "LLB201",
      "course_title": "Constitutional Law",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Aisha Khan",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Summer 2023",
      "semester": 2,
      "course_code": "LLB202",
      "course_title": "Muslim Law-II",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Aisha Khan",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Summer 2023",
      "semester": 2,
      "course_code": "LLB203",
      "course_title": "Law of Tort",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Aisha Khan",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Summer 2023",
      "semester": 2,
      "course_code": "LLB204",
      "course_title": "Hindu Law",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131004",
      "name": "Imran Hossain",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2020",
      "semester": 8,
      "course_code": "LLB801",
      "course_title": "Cyber Law",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131004",
      "name": "Imran Hossain",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2020",
      "semester": 8,
      "course_code": "LLB802",
      "course_title": "Legal Research",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131004",
      "name": "Imran Hossain",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2020",
      "semester": 8,
      "course_code": "LLB803",
      "course_title": "Professional Ethics",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131003",
      "name": "Sabina Yasmin",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2024",
      "semester": 1,
      "course_code": "LLB101",
      "course_title": "Jurisprudence and Legal Theory",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131003",
      "name": "Sabina Yasmin",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2024",
      "semester": 1,
      "course_code": "LLB102",
      "course_title": "Law of Contract and Partnership",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131003",
      "name": "Sabina Yasmin",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2024",
      "semester": 1,
      "course_code": "LLB103",
      "course_title": "Muslim Law-I",
      "credit_hours": 3,
      "grade": "B",
      "grade_point": 3.0
    },
    {
      "student_id": "582310008131003",
      "name": "Sabina Yasmin",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2024",
      "semester": 1,
      "course_code": "LLB104",
      "course_title": "Legal System of Bangladesh",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Rafi Islam",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2022",
      "semester": 4,
      "course_code": "LLB401",
      "course_title": "Criminal Procedure",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Rafi Islam",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2022",
      "semester": 4,
      "course_code": "LLB402",
      "course_title": "Land Laws-II",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Rafi Islam",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2022",
      "semester": 4,
      "course_code": "LLB403",
      "course_title": "Administrative Law",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131002",
      "name": "Rafi Islam",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2022",
      "semester": 4,
      "course_code": "LLB404",
      "course_title": "Evidence Law",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131005",
      "name": "Tania Rahman",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2021",
      "semester": 5,
      "course_code": "LLB501",
      "course_title": "Civil Procedure",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131005",
      "name": "Tania Rahman",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2021",
      "semester": 5,
      "course_code": "LLB502",
      "course_title": "Drafting & Pleading",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131005",
      "name": "Tania Rahman",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2021",
      "semester": 5,
      "course_code": "LLB503",
      "course_title": "Labour Law",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131004",
      "name": "Kabir Ahmed",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 7,
      "course_code": "LLB701",
      "course_title": "Environmental Law",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131004",
      "name": "Kabir Ahmed",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 7,
      "course_code": "LLB702",
      "course_title": "Human Rights",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131004",
      "name": "Kabir Ahmed",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 7,
      "course_code": "LLB703",
      "course_title": "Alternative Dispute Resolution",
      "credit_hours": 3,
      "grade": "A-",
      "grade_point": 3.5
    },
    {
      "student_id": "582310008131001",
      "name": "torykuzzaman tonoy",
      "program": "",
      "batch": "Spring 2023",
      "semester": 1,
      "course_code": "LL-2722",
      "course_title": "Alternative Dispute Resolution",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131001",
      "name": "torykuzzaman tonoy",
      "program": "",
      "batch": "Spring 2023",
      "semester": 1,
      "course_code": "LL-2723",
      "course_title": "Alternative",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131002",
      "name": "Nusrat Jahan TONOU",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2029",
      "semester": 3,
      "course_code": "LLB301",
      "course_title": "Criminal Law-I",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    },
    {
      "student_id": "582310008131045",
      "name": "TORYKUZZAMAN TONOY",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Spring 2023",
      "semester": 11,
      "course_code": "LLB1103",
      "course_title": "Legal Aid & Public Interest Lawyering",
      "credit_hours": 3,
      "grade": "B+",
      "grade_point": 3.25
    },
    {
      "student_id": "582310008131002",
      "name": "Nusrat Jahan TONOU",
      "program": "Bachelor of Laws (LLB Honours)",
      "batch": "Fall 2029",
      "semester": 3,
      "course_code": "LLB302",
      "course_title": "Land Laws of Bangladesh-I",
      "credit_hours": 3,
      "grade": "A+",
      "grade_point": 4.0
    }
  
];

// Initialize the data namespace if it doesn't exist
window.IsakhaData = window.IsakhaData || {};

// Process the raw data into a more usable format
IsakhaData.processedData = {};

rawData.forEach(record => {
    const studentId = record.student_id;
    const semesterNum = parseInt(record.semester);
    
    if (!IsakhaData.processedData[studentId]) {
        IsakhaData.processedData[studentId] = {
            studentInfo: {
                name: record.name,
                program: record.program,
                batch: record.batch
            },
            results: {}
        };
    }

    if (!IsakhaData.processedData[studentId].results[semesterNum]) {
        IsakhaData.processedData[studentId].results[semesterNum] = [];
    }

    // Check if course already exists for this semester
    const existingCourse = IsakhaData.processedData[studentId].results[semesterNum].find(
        course => course.courseCode === record.course_code
    );

    // Only add if course doesn't exist
    if (!existingCourse) {
        IsakhaData.processedData[studentId].results[semesterNum].push({
            courseCode: record.course_code,
            courseTitle: record.course_title,
            creditHours: record.credit_hours,
            grade: record.grade,
            gradePoint: record.grade_point
        });
    }
});
