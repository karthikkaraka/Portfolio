export const resumeData = {
  personal: {
    name: "Karaka Karthik",
    title: "Full Stack Java Developer",
    location: "Visakhapatnam, Andhra Pradesh",
    phone: "+91 9346264848",
    email: "karthikkaraka444@gmail.com",
    linkedin: "https://www.linkedin.com/in/karaka-karthik",
    github: "https://github.com/karthikkaraka444",
    summary: "Aspiring Full Stack Java Developer with a strong backend development focus and hands-on experience building secure, scalable applications using Java, Spring Boot, Spring Security, JWT, Hibernate, and MySQL. Experienced in developing REST APIs, authentication systems, database-driven applications, and full-stack projects using React. Passionate about software engineering and building real-world applications."
  },
  
  skills: [
    {
      category: "Backend",
      items: ["Spring Boot", "Spring Security", "Hibernate", "JDBC", "REST APIs"]
    },
    {
      category: "Frontend",
      items: ["React", "HTML5", "CSS3", "JavaScript"]
    },
    {
      category: "Databases",
      items: ["MySQL"]
    },
    {
      category: "Programming Languages",
      items: ["Java", "JavaScript", "SQL", "C"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Docker", "Postman", "IntelliJ IDEA", "VS Code"]
    },
    {
      category: "Build Tools & Security",
      items: ["Maven", "JWT Authentication"]
    }
  ],
  
  expertise: [
    {
      title: "Spring Boot & REST APIs",
      description: "Designing robust, decoupled RESTful APIs using standard layered controller-service-repository patterns, enabling high scalability and modularity.",
      icon: "Cpu"
    },
    {
      title: "Spring Security & JWT",
      description: "Implementing stateless secure authentication mechanisms, JWT generation and validation, and role-based access control (RBAC) to defend endpoints.",
      icon: "ShieldAlert"
    },
    {
      title: "Database Design & Hibernate",
      description: "Modeling robust relational schemas in MySQL, optimizing entity relationships with Hibernate, and managing database queries via Spring Data JPA.",
      icon: "Database"
    },
    {
      title: "Docker & Deployment",
      description: "Configuring multi-stage Dockerfiles to containerize applications, maintaining isolated execution environments, and streamlining build workflows.",
      icon: "Layers"
    }
  ],
  
  education: [
    {
      institution: "Andhra University College of Engineering",
      degree: "Bachelor of Technology (Computer Science and Engineering)",
      duration: "Aug 2023 – Jul 2027",
      details: "Pursuing solid fundamentals in algorithms, data structures, database management systems, and core computer science principles."
    },
    {
      institution: "Tirumala Junior College",
      degree: "Intermediate (MPC)",
      duration: "Jun 2021 – May 2023",
      details: "Rigorous focus on Mathematics, Physics, and Chemistry, graduating with honors."
    }
  ],
  
  internship: {
    company: "Elevate Labs",
    position: "Java Developer Intern",
    duration: "Aug 2025 – Sep 2025",
    responsibilities: [
      "Developed backend modules using Java and Spring Boot.",
      "Worked with REST APIs and MySQL databases.",
      "Implemented JWT-based authentication and authorization.",
      "Followed layered architecture and clean coding principles."
    ]
  },
  
  projects: [
    {
      id: "nostos",
      title: "NOSTOS - Lost & Found Management System",
      role: "Backend & Frontend",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "React", "MySQL"],
      description: "A secure full-stack lost & found web application enabling university campus members and administrators to track, match, report, and safely claim lost belongings.",
      features: [
        "Full-stack Lost & Found platform enabling users to report, track, and recover lost belongings.",
        "Implemented Email OTP verification, JWT authentication, and role-based access control using Spring Security.",
        "Designed claim-management workflows with ownership verification, duplicate claim prevention, and fraud detection.",
        "Built automatic item matching, pagination, filtering, email notifications, and admin moderation features.",
        "Developed responsive frontend interfaces using React and integrated them with REST APIs."
      ],
      details: {
        problem: "Campuses and large organizations face significant tracking challenges with lost items. Traditional bullet boards or email groups lead to high rates of duplicate reports, fraudulent claims, lack of ownership proof, and a heavy manual workload for physical administration offices.",
        architecture: "Layers include Controller, Service, and Repository patterns on the backend, communicating over a REST JSON boundary with a responsive React Single Page Application frontend. Integrates JavaMailSender for system-wide transactional email notifications.",
        database: "MySQL schema utilizing tables for 'users', 'roles', 'belongings' (containing descriptions, coordinates, categories, dates, and statuses like lost, found, claimed), and a critical 'claims' table to track requests, ownership upload logs, and moderation states.",
        security: "Stateless security framework utilizing Spring Security with a custom OncePerRequestFilter to intercept and validate Bearer JWT tokens. Leverages secure endpoints restricted to roles (ROLE_USER, ROLE_ADMIN) and transient OTP generation with expiry bounds for self-service user registration.",
        lessons: "Learned how to design scalable search indices using pagination and filters in Spring Data JPA. Perfected the integration of React's state management with stateless JWT auth cookies and developed a resilient item-matching algorithm."
      },
      links: {
        github: "https://github.com/karthikkaraka444/nostos",
        demo: null
      }
    },
    {
      id: "hospital",
      title: "Hospital Management System",
      role: "Backend",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      description: "A robust and role-secured enterprise hospital administration API helping manage appointments, staff allocation, patient medical records, and departments.",
      features: [
        "Developed backend services for managing patients, doctors, appointments, departments, and hospital staff.",
        "Implemented secure authentication and role-based authorization for Admin, Doctor, Nurse, Receptionist, and Staff roles.",
        "Designed RESTful APIs and entity relationships using Spring Data JPA and Hibernate."
      ],
      details: {
        problem: "Modern clinical environments require structured, secure patient workflows. Sharing sensitive medical details between different hospital departments requires complex access control grids to protect data confidentiality while keeping doctor-patient scheduling workflows frictionless.",
        architecture: "Pure REST API backend structured into discrete domain modules. Utilizes dynamic mapping, global exception boundaries, and transaction-wrapped services for appointment updates.",
        database: "Highly normalized relational architecture mapping Doctors (One-to-Many with Appointments), Departments (One-to-Many with Staff), Patients, and dynamic appointment slots, ensuring strict referential integrity.",
        security: "Granular Role-Based Access Control (RBAC) mapping specific roles (Admin, Doctor, Nurse, Receptionist, Staff) to designated HTTP endpoints using @PreAuthorize. JWT tokens carry active scopes to prevent horizontal privilege escalation.",
        lessons: "Mastered deep Hibernate performance techniques, including mapping lazy loaded relationships, custom JPQL joins, and using entity graphs to prevent typical N+1 query bottlenecks during staff roster compilation."
      },
      links: {
        github: "https://github.com/karthikkaraka444/hospital-management",
        demo: null
      }
    },
    {
      id: "bookstore",
      title: "Online Bookstore Management System",
      role: "Backend",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      description: "An e-commerce backend platform offering complete services for catalog exploration, shopping cart tracking, inventories, user accounts, and secure order processing.",
      features: [
        "Built backend services for managing books, authors, inventory, users, carts, and orders.",
        "Implemented JWT authentication and role-based access control using Spring Security.",
        "Designed REST APIs and database relationships using Spring Data JPA and Hibernate."
      ],
      details: {
        problem: "Managing consistent shopping cart states, preventing checkout collisions on low-inventory items, and securely processing multi-line transaction orders without introducing system-wide lockouts.",
        architecture: "Domain-Driven Design (DDD) layout splitting shopping cart logic, order fulfillment, and core inventory catalog. Uses Spring's declarative transaction manager.",
        database: "Relational tables containing Books, Authors, Users, CartItems, Orders, and OrderLineItems. Features specific composite primary keys for cart and line mappings.",
        security: "Allows public read-only paths for catalog browsing, while shopping carts and order checkouts are protected under individual user JWT authorizations.",
        lessons: "Implemented Spring's @Transactional annotation controls to rollback order sequences if target catalog book stock checks fail during checkout. Explored custom validations on model DTOs."
      },
      links: {
        github: "https://github.com/karthikkaraka444/bookstore-management",
        demo: null
      }
    },
    {
      id: "quiz",
      title: "Quiz App",
      role: "Backend",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      description: "An interactive education backend API supporting the creation of quiz modules, instant option evaluation, and robust score calculation profiles.",
      features: [
        "Developed backend APIs for quiz creation, question management, quiz participation, and score calculation.",
        "Implemented JWT-based authentication and role-based access control for secure access.",
        "Designed relational database structures using Spring Data JPA."
      ],
      details: {
        problem: "Educators need a lightweight platform to set up online quizzes, randomize answer choices, collect student inputs, and automatically score submissions while preventing duplicate responses or cheating.",
        architecture: "Modular controller layer providing question banks and scoring calculators. Integrates global exception translation for illegal attempt requests.",
        database: "Tables representing Quizzes, Questions (carrying choices, text, and correct index), and AttemptLogs (storing answers, timestamp, user score, and user mapping).",
        security: "Role-based locks: only TEACHER or ADMIN users can execute POST/PUT/DELETE commands on quizzes and questions, while students are granted student scopes to retrieve questions and submit responses.",
        lessons: "Practiced modeling bidirectional One-to-Many mapping with CascadeType.ALL configurations in JPA, ensuring question banks update consistently when modifying parent quiz records."
      },
      links: {
        github: "https://github.com/karthikkaraka444/quiz-app",
        demo: null
      }
    },
    {
      id: "notes",
      title: "Notes App",
      role: "Backend",
      technologies: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL"],
      description: "A reliable REST CRUD notes management system built with transactional integrity, featuring strict self-service data ownership and robust API error boundaries.",
      features: [
        "Developed a secure CRUD Notes application backend using Spring Boot.",
        "Implemented JWT authentication, authorization, and MySQL persistence using Spring Data JPA.",
        "Applied validation and exception handling to improve API reliability and security."
      ],
      details: {
        problem: "Users require a simple, fast notes management API. The backend must enforce secure notes privacy, return user-friendly errors, validate titles/bodies, and operate with low overhead.",
        architecture: "Standard layered REST application utilizing ControllerAdvice for centralized, elegant error translation and binding validation.",
        database: "Simplified relational schemas: 'users' and 'notes' joined via a foreign key on owner_id, containing creation and modification timestamps.",
        security: "JWT validation filter verifying that the logged-in client is the specific creator and owner of the note before performing any read, update, or delete commands.",
        lessons: "Mastered the usage of Spring validation library constraints (@Valid, @NotBlank) and gained deep familiarity handling unique constraint SQL exceptions elegantly."
      },
      links: {
        github: "https://github.com/karthikkaraka444/notes-app",
        demo: null
      }
    }
  ]
};
