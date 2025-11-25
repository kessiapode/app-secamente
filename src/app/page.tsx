"use client";

import { useState } from "react";
import { Heart, Brain, Activity, Sparkles, TrendingDown, Droplet, Moon, Smile, AlertCircle, ChevronRight, Play, CheckCircle, Flame, Wind, Apple, Home, User } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

type MoodType = "great" | "good" | "neutral" | "stressed" | "anxious" | null;

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [dailyMood, setDailyMood] = useState<MoodType>(null);
  const [waterGlasses, setWaterGlasses] = useState(0);
  const [sleepQuality, setSleepQuality] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-teal-50 pb-24">
      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-6 py-8">
        {/* DASHBOARD */}
        {activeTab === "dashboard" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            {/* Header Minimalista */}
            <div className="text-center space-y-3 pt-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">MindFit Belly</h1>
              <p className="text-lg text-gray-500">Transformação sem sofrimento</p>
            </div>

            {/* Welcome Message - Foco Principal */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">Como você está hoje?</h2>
              <p className="text-gray-500 mb-6">Escolha como se sente neste momento</p>
              
              <div className="grid grid-cols-5 gap-3">
                {[
                  { mood: "great", emoji: "😊", label: "Ótimo" },
                  { mood: "good", emoji: "🙂", label: "Bem" },
                  { mood: "neutral", emoji: "😐", label: "Normal" },
                  { mood: "stressed", emoji: "😰", label: "Estresse" },
                  { mood: "anxious", emoji: "😟", label: "Ansioso" },
                ].map((item) => (
                  <button
                    key={item.mood}
                    onClick={() => setDailyMood(item.mood as MoodType)}
                    className={`p-4 rounded-2xl transition-all duration-300 ${
                      dailyMood === item.mood
                        ? "bg-emerald-100 scale-105 shadow-md"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                  >
                    <div className="text-3xl mb-2">{item.emoji}</div>
                    <div className="text-xs text-gray-600 font-medium">{item.label}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Ação Mínima Eficaz - Destaque */}
            <div className="bg-gradient-to-br from-emerald-400 to-teal-500 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Ação de hoje</h3>
              <p className="text-emerald-50 mb-6">Pequenas ações, grandes resultados</p>
              
              <Button className="w-full h-16 bg-white text-emerald-600 hover:bg-emerald-50 rounded-2xl text-lg font-semibold shadow-md">
                <Droplet className="w-6 h-6 mr-3" />
                Beber 1 copo de água agora
              </Button>
            </div>

            {/* Métricas Simplificadas */}
            <div className="space-y-4">
              {/* Water */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                      <Droplet className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Água</h4>
                      <p className="text-sm text-gray-500">Meta diária</p>
                    </div>
                  </div>
                  <span className="text-3xl font-bold text-blue-600">{waterGlasses}/8</span>
                </div>
                <Progress value={(waterGlasses / 8) * 100} className="h-3 bg-blue-50" />
                <Button
                  onClick={() => setWaterGlasses(Math.min(8, waterGlasses + 1))}
                  variant="ghost"
                  className="w-full mt-4 text-blue-600 hover:bg-blue-50 rounded-xl"
                >
                  + Adicionar copo
                </Button>
              </div>

              {/* Sleep */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                      <Moon className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Sono</h4>
                      <p className="text-sm text-gray-500">Qualidade</p>
                    </div>
                  </div>
                  <span className="text-3xl font-bold text-purple-600">{sleepQuality}/10</span>
                </div>
                <div className="flex gap-1.5">
                  {[...Array(10)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setSleepQuality(i + 1)}
                      className={`flex-1 h-10 rounded-lg transition-all ${
                        i < sleepQuality ? "bg-purple-500" : "bg-gray-100 hover:bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* MODO CORPO */}
        {activeTab === "corpo" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-2 pt-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl mb-4">
                <Flame className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Modo Corpo</h1>
              <p className="text-lg text-gray-500">Ações práticas para transformação</p>
            </div>

            {/* Progresso Visual */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Progresso Visual</h3>
              <p className="text-gray-500 mb-6">Acompanhe sua evolução</p>
              
              <div className="grid grid-cols-3 gap-4">
                {["Semana 1", "Semana 2", "Semana 3"].map((week, i) => (
                  <div key={week} className="aspect-[3/4] bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl flex flex-col items-center justify-center border-2 border-dashed border-emerald-200">
                    <div className="text-5xl mb-3">📸</div>
                    <p className="text-sm font-medium text-gray-600">{week}</p>
                    {i === 0 && (
                      <Button size="sm" className="mt-3 bg-emerald-500 hover:bg-emerald-600 rounded-xl">
                        Adicionar
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Refeições do Dia */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Refeições de Hoje</h3>
              <p className="text-gray-500 mb-6">Flexível e sem proibições</p>
              
              <div className="space-y-3">
                {[
                  { meal: "Café da Manhã", time: "7h-9h", done: true },
                  { meal: "Almoço", time: "12h-14h", done: false },
                  { meal: "Lanche", time: "16h-17h", done: false },
                  { meal: "Jantar", time: "19h-21h", done: false },
                ].map((item) => (
                  <div key={item.meal} className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      item.done ? "bg-emerald-500" : "bg-gray-200"
                    }`}>
                      {item.done && <CheckCircle className="w-6 h-6 text-white" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">{item.meal}</h4>
                      <p className="text-sm text-gray-500">{item.time}</p>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </div>
            </div>

            {/* Desafio Ativo */}
            <div className="bg-gradient-to-br from-orange-400 to-pink-500 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Desafio Ativo</h3>
              <p className="text-orange-50 mb-6">Seca com Leveza</p>
              
              <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-4 mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">Dia 3 de 7</span>
                  <span className="text-sm">43%</span>
                </div>
                <Progress value={43} className="h-3 bg-white/30" />
              </div>

              <Button className="w-full h-14 bg-white text-orange-600 hover:bg-orange-50 rounded-2xl font-semibold">
                Continuar Desafio
              </Button>
            </div>
          </div>
        )}

        {/* MODO MENTE */}
        {activeTab === "mente" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-2 pt-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Modo Mente</h1>
              <p className="text-lg text-gray-500">Reprogramação mental</p>
            </div>

            {/* Áudio do Dia */}
            <div className="bg-gradient-to-br from-purple-400 to-indigo-500 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Áudio de Hoje</h3>
              <p className="text-purple-50 mb-8">Eu mereço um corpo saudável</p>
              
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="w-12 h-12" />
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-3xl font-bold mb-1">3:24</p>
                <p className="text-purple-100 text-sm">Duração</p>
              </div>

              <Button className="w-full h-16 bg-white text-purple-600 hover:bg-purple-50 rounded-2xl text-lg font-semibold">
                Iniciar Áudio
              </Button>
            </div>

            {/* Check-in Emocional */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Check-in Emocional</h3>
              <p className="text-gray-500 mb-6">Como você está antes de comer?</p>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { emotion: "Fome Real", emoji: "🍽️" },
                  { emotion: "Ansiedade", emoji: "😰" },
                  { emotion: "Tédio", emoji: "😑" },
                  { emotion: "Estresse", emoji: "😤" },
                ].map((item) => (
                  <button
                    key={item.emotion}
                    className="p-6 bg-gray-50 hover:bg-emerald-50 rounded-2xl transition-all border-2 border-transparent hover:border-emerald-300"
                  >
                    <div className="text-4xl mb-2">{item.emoji}</div>
                    <div className="text-sm font-medium text-gray-700">{item.emotion}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Modo Reset */}
            <div className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Modo Reset 🔄</h3>
              <p className="text-rose-50 mb-6">Recaiu? Sem culpa! Vamos reposicionar</p>
              
              <Button className="w-full h-16 bg-white text-rose-600 hover:bg-rose-50 rounded-2xl text-lg font-semibold">
                Áudio de Reset (2 min)
              </Button>
            </div>
          </div>
        )}

        {/* MODO ALMA */}
        {activeTab === "alma" && (
          <div className="space-y-8 animate-in fade-in duration-500">
            <div className="text-center space-y-2 pt-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl font-bold text-gray-900">Modo Alma</h1>
              <p className="text-lg text-gray-500">Identidade e autoimagem</p>
            </div>

            {/* Visualização do Dia */}
            <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Visualização Guiada</h3>
              <p className="text-pink-50 mb-8">Meu corpo ideal</p>
              
              <div className="flex items-center justify-center mb-8">
                <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Heart className="w-12 h-12" />
                </div>
              </div>

              <div className="text-center mb-6">
                <p className="text-3xl font-bold mb-1">8:00</p>
                <p className="text-pink-100 text-sm">Duração</p>
              </div>

              <Button className="w-full h-16 bg-white text-pink-600 hover:bg-pink-50 rounded-2xl text-lg font-semibold">
                Iniciar Visualização
              </Button>
            </div>

            {/* Afirmação do Dia */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Afirmação de Hoje</h3>
              
              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-6 border border-pink-100">
                <p className="text-lg text-gray-800 italic text-center leading-relaxed">
                  "Eu sou capaz de emagrecer com leveza e sem sofrimento"
                </p>
              </div>

              <Button variant="ghost" className="w-full mt-4 text-pink-600 hover:bg-pink-50 rounded-xl">
                Próxima Afirmação
              </Button>
            </div>

            {/* Evolução Emocional */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Sua Evolução</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-700 font-medium">Autoconfiança</span>
                    <span className="text-2xl font-bold text-emerald-600">85%</span>
                  </div>
                  <Progress value={85} className="h-4 bg-emerald-50" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-700 font-medium">Disciplina</span>
                    <span className="text-2xl font-bold text-blue-600">72%</span>
                  </div>
                  <Progress value={72} className="h-4 bg-blue-50" />
                </div>
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-gray-700 font-medium">Autoamor</span>
                    <span className="text-2xl font-bold text-pink-600">90%</span>
                  </div>
                  <Progress value={90} className="h-4 bg-pink-50" />
                </div>
              </div>
            </div>

            {/* Diário de Vitórias */}
            <div className="bg-gradient-to-br from-amber-400 to-orange-500 rounded-3xl p-8 text-white shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Vitórias de Hoje 🏆</h3>
              <p className="text-amber-50 mb-6">Celebre suas conquistas</p>
              
              <div className="space-y-3 mb-6">
                {[
                  "Bebi 8 copos de água",
                  "Fiz caminhada de 15 min",
                  "Comi com consciência",
                ].map((victory, i) => (
                  <div key={i} className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl flex items-center gap-3">
                    <CheckCircle className="w-6 h-6 flex-shrink-0" />
                    <p className="font-medium">{victory}</p>
                  </div>
                ))}
              </div>

              <Button className="w-full h-14 bg-white text-orange-600 hover:bg-orange-50 rounded-2xl font-semibold">
                + Adicionar Vitória
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* Bottom Navigation - Estilo Minimalista */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-t border-gray-200 z-50">
        <div className="max-w-2xl mx-auto px-6">
          <div className="grid grid-cols-4 gap-2 py-3">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`flex flex-col items-center gap-1 py-2 rounded-2xl transition-all ${
                activeTab === "dashboard"
                  ? "text-emerald-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Home className="w-6 h-6" />
              <span className="text-xs font-medium">Início</span>
            </button>
            <button
              onClick={() => setActiveTab("corpo")}
              className={`flex flex-col items-center gap-1 py-2 rounded-2xl transition-all ${
                activeTab === "corpo"
                  ? "text-orange-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Flame className="w-6 h-6" />
              <span className="text-xs font-medium">Corpo</span>
            </button>
            <button
              onClick={() => setActiveTab("mente")}
              className={`flex flex-col items-center gap-1 py-2 rounded-2xl transition-all ${
                activeTab === "mente"
                  ? "text-purple-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Brain className="w-6 h-6" />
              <span className="text-xs font-medium">Mente</span>
            </button>
            <button
              onClick={() => setActiveTab("alma")}
              className={`flex flex-col items-center gap-1 py-2 rounded-2xl transition-all ${
                activeTab === "alma"
                  ? "text-pink-600"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              <Heart className="w-6 h-6" />
              <span className="text-xs font-medium">Alma</span>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
