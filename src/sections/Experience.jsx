import { useEffect, useRef } from "react";

const experiences = [
  {
    period: "Jun 2026 - Jun 2026",
    role: "AI Data Analyst Intern",
    company: "InAmigos Foundation (IAF)",
    description:
      "Processed, cleaned, and analyzed massive datasets using feature engineering and statistical modeling to extract high-leverage metrics for corporate decision-making pipelines. Translated complex data anomalies into structured analytical summaries to improve downstream pipeline reliability and cross-team reporting efficiency.",
    technologies: ["Python", "SQL", "Feature Engineering", "Statistical Modeling"],
    current: false,
  },
  {
    period: "Dec 2025 - Mar 2026",
    role: "Data Science Intern",
    company: "The Skybrisk",
    description:
      "Executed a 3-month intensive AI and data science internship focused on building scalable machine learning workflows and automated data inference pipelines. Collaborated with cross-functional engineering teams to design robust data preprocessing modules and optimize model query latency across internal business data structures.",
    technologies: ["Python", "Machine Learning", "Data Preprocessing", "Data Pipelines"],
    current: false,
  },
  {
    period: "Present",
    role: "Full Stack ML Engineer",
    company: "TrustSnare (Capstone Project)",
    description:
      "Architecting a production-grade secure browser combining ML phishing detection with LLM threat analysis. Integrated AdaBoost model achieving 95%+ detection accuracy and designed FastAPI backend with PostgreSQL.",
    technologies: ["FastAPI", "React", "PostgreSQL", "PyTorch", "GPT-4"],
    current: true,
  },
  {
    period: "Project",
    role: "AI Engineer",
    company: "Enterprise RAG App (Agentic Cloud & Kubernetes AI)",
    description:
      "Architected a cyclic Agentic RAG state machine in LangGraph orchestrating Planner, Retriever, and Synthesizer nodes over 768-dim Gemini embeddings in Qdrant with Cohere cross-encoder reranking. Enforced dual-layer safety via NVIDIA NeMo Guardrails (Colang 2.0) against prompt injection/jailbreaks with asynchronous SSE token streaming and Pydantic Logfire tracing.",
    technologies: ["FastAPI", "LangGraph", "Qdrant", "NeMo Guardrails", "Llama 3.3 70B", "Gemini", "Cohere Rerank"],
    current: false,
  },
  {
    period: "Project",
    role: "AI / Voice Engineer",
    company: "Sanjeevani: Autonomous Multilingual AI Health & Triage Assistant",
    description:
      "Engineered an autonomous clinical triage agent implementing the Manchester Triage System (MTS) via a deterministic LangGraph state machine with automated 108 emergency escalation and AYUSH Hybrid RAG. Built a multilingual Indic voice pipeline (Hindi, Garhwali, Kumaoni) using Sarvam AI and Bhashini Conformer ASR, paired with an OpenCV edge vision module for medical screening.",
    technologies: ["FastAPI", "LangGraph", "Qdrant", "Sarvam AI", "Bhashini", "OpenCV"],
    current: false,
  },
  {
    period: "Project",
    role: "Computer Vision Engineer",
    company: "Video BroadCaster: Real-Time AI Segmentation & Virtual Camera",
    description:
      "Built a real-time computer vision virtual camera broadcast engine using YOLOv8 instance segmentation (yolov8m-seg) and OpenCV to isolate human subjects for Zoom, Google Meet, and OBS. Engineered a multi-threaded frame pipeline with an anti-lag buffer drainer and FastAPI control server to hot-swap Gaussian blur, blackout, and custom backgrounds at zero perceived latency.",
    technologies: ["Python", "PyTorch", "Ultralytics YOLOv8-Seg", "OpenCV", "FastAPI", "PyVirtualCam"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Blob - Fixed typo (b-96 -> h-96) */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header - Separated to allow timeline to be wider */}
        <div className="max-w-3xl mx-auto md:text-center mb-20">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-foreground">
            Experience that <span className="text-primary glow-text">speaks volumes.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200 text-lg">
            A timeline of my professional growth, from curious beginner to
            senior engineer leading teams and building projects at scale.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          
          {/* Vertical Line - Positioned relative to the full list */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/0 via-primary/50 to-primary/0 md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 md:gap-12 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot - Added Styling */}
                <div className="absolute left-[-5px] md:left-1/2 top-6 w-3 h-3 rounded-full bg-primary border-4 border-background shadow-[0_0_10px_theme('colors.primary.DEFAULT')] md:-translate-x-1/2 z-10"></div>

                {/* Card Content Logic */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:col-start-1 md:text-right md:pr-12" // Even items: Left side
                      : "md:col-start-2 md:pl-12" // Odd items: Right side
                  }`}
                >
                  <div className="glass p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
                    
                    <div className={`flex flex-col ${idx % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                        <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3 border border-primary/20">
                        {experience.period}
                        </span>
                        <h3 className="text-xl font-bold text-foreground">
                        {experience.role}
                        </h3>
                        <p className="text-muted-foreground font-medium mb-4">
                        {experience.company}
                        </p>
                        <p className="text-sm text-muted-foreground/80 leading-relaxed mb-6">
                        {experience.description}
                        </p>
                        
                        <div className={`flex flex-wrap gap-2 ${idx % 2 === 0 ? "md:justify-end" : "justify-start"}`}>
                        {experience.technologies.map((tech, techIdx) => (
                            <span
                            key={techIdx}
                            className="px-3 py-1 bg-surface border border-white/5 text-xs rounded-full text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-colors"
                            >
                            {tech}
                            </span>
                        ))}
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;