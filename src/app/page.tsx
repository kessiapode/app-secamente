"use client";

import { useState } from "react";
import { Heart, Brain, Activity, Sparkles, TrendingDown, Droplet, Moon, Smile, AlertCircle, ChevronRight, Play, CheckCircle, Flame, Wind, Apple } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

type MoodType = "great" | "good" | "neutral" | "stressed" | "anxious" | null;

export default function Home() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [dailyMood, setDailyMood] = useState<MoodType>(null);
  const [waterGlasses, setWaterGlasses] = useState(0);
  const [sleepQuality, setSleepQuality] = useState(0);

  return (
    <div className="min-h-screen pb-20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-emerald-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-emerald-400 to-teal-500 p-2 rounded-2xl">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-gray-800">MindFit Belly</h1>
                <p className="text-xs text-gray-500">Transformação sem sofrimento</p>
              </div>
            </div>
            <Badge className="bg-gradient-to-r from-amber-400 to-orange-500 text-white border-0">
              Premium
            </Badge>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-6 bg-white/80 backdrop-blur-sm p-1 rounded-2xl shadow-sm">
            <TabsTrigger value="dashboard" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-400 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              <Activity className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Dashboard</span>
            </TabsTrigger>
            <TabsTrigger value="corpo" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-400 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              <Flame className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Corpo</span>
            </TabsTrigger>
            <TabsTrigger value="mente" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-400 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              <Brain className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Mente</span>
            </TabsTrigger>
            <TabsTrigger value="alma" className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-emerald-400 data-[state=active]:to-teal-500 data-[state=active]:text-white">
              <Heart className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">Alma</span>
            </TabsTrigger>
          </TabsList>

          {/* DASHBOARD */}
          <TabsContent value="dashboard" className="space-y-6">
            {/* Welcome Message */}
            <Card className="bg-gradient-to-br from-emerald-400 to-teal-500 border-0 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Olá, Guerreira! 💚</CardTitle>
                <CardDescription className="text-emerald-50">
                  Como você está se sentindo hoje?
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-5 gap-2">
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
                      className={`p-3 rounded-xl transition-all ${
                        dailyMood === item.mood
                          ? "bg-white text-emerald-600 scale-110 shadow-lg"
                          : "bg-white/20 hover:bg-white/30"
                      }`}
                    >
                      <div className="text-2xl mb-1">{item.emoji}</div>
                      <div className="text-xs">{item.label}</div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Daily Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Water Intake */}
              <Card className="bg-white/80 backdrop-blur-sm border-blue-100 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Droplet className="w-5 h-5 text-blue-500" />
                    <span className="text-2xl font-bold text-blue-600">{waterGlasses}/8</span>
                  </div>
                  <CardTitle className="text-sm text-gray-600">Água Hoje</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={(waterGlasses / 8) * 100} className="h-2 bg-blue-100" />
                  <Button
                    onClick={() => setWaterGlasses(Math.min(8, waterGlasses + 1))}
                    size="sm"
                    className="w-full mt-3 bg-gradient-to-r from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600"
                  >
                    + 1 copo
                  </Button>
                </CardContent>
              </Card>

              {/* Sleep Quality */}
              <Card className="bg-white/80 backdrop-blur-sm border-purple-100 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Moon className="w-5 h-5 text-purple-500" />
                    <span className="text-2xl font-bold text-purple-600">{sleepQuality}/10</span>
                  </div>
                  <CardTitle className="text-sm text-gray-600">Sono</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={sleepQuality * 10} className="h-2 bg-purple-100" />
                  <div className="flex gap-1 mt-3">
                    {[...Array(10)].map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setSleepQuality(i + 1)}
                        className={`flex-1 h-8 rounded ${
                          i < sleepQuality ? "bg-purple-500" : "bg-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Self Image */}
              <Card className="bg-white/80 backdrop-blur-sm border-pink-100 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <Smile className="w-5 h-5 text-pink-500" />
                    <span className="text-2xl font-bold text-pink-600">8/10</span>
                  </div>
                  <CardTitle className="text-sm text-gray-600">Autoimagem</CardTitle>
                </CardHeader>
                <CardContent>
                  <Progress value={80} className="h-2 bg-pink-100" />
                  <p className="text-xs text-gray-500 mt-3">Você está evoluindo! 💖</p>
                </CardContent>
              </Card>

              {/* Emotional Crises */}
              <Card className="bg-white/80 backdrop-blur-sm border-orange-100 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    <span className="text-2xl font-bold text-orange-600">2</span>
                  </div>
                  <CardTitle className="text-sm text-gray-600">Crises Identificadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-1 text-xs text-gray-600">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      <span>Ansiedade (15h)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-orange-400" />
                      <span>Estresse (19h)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-emerald-500" />
                  Ação Mínima Eficaz
                </CardTitle>
                <CardDescription>Pequenas ações, grandes resultados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <Button className="h-auto py-4 flex flex-col items-center gap-2 bg-gradient-to-br from-blue-400 to-cyan-500 hover:from-blue-500 hover:to-cyan-600">
                    <Droplet className="w-6 h-6" />
                    <span className="text-sm">Beber 1 copo de água</span>
                  </Button>
                  <Button className="h-auto py-4 flex flex-col items-center gap-2 bg-gradient-to-br from-emerald-400 to-teal-500 hover:from-emerald-500 hover:to-teal-600">
                    <Wind className="w-6 h-6" />
                    <span className="text-sm">Respirar 3x profundo</span>
                  </Button>
                  <Button className="h-auto py-4 flex flex-col items-center gap-2 bg-gradient-to-br from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600">
                    <Activity className="w-6 h-6" />
                    <span className="text-sm">Caminhar 5 minutos</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* MODO CORPO */}
          <TabsContent value="corpo" className="space-y-6">
            {/* Progress Photos */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-emerald-500" />
                  Progresso Visual
                </CardTitle>
                <CardDescription>Acompanhe sua evolução semanal</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4">
                  {["Semana 1", "Semana 2", "Semana 3"].map((week, i) => (
                    <div key={week} className="relative aspect-[3/4] bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl flex items-center justify-center border-2 border-dashed border-emerald-300">
                      <div className="text-center">
                        <div className="text-4xl mb-2">📸</div>
                        <p className="text-sm text-gray-600">{week}</p>
                        {i === 0 && (
                          <Button size="sm" className="mt-2 bg-emerald-500 hover:bg-emerald-600">
                            Adicionar
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Meal Plans */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Apple className="w-5 h-5 text-emerald-500" />
                  Plano de Refeições Flexível
                </CardTitle>
                <CardDescription>Adaptado ao que você já come, sem proibições</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  { meal: "Café da Manhã", time: "7h-9h", suggestion: "Ovos mexidos + pão integral + fruta", status: "done" },
                  { meal: "Almoço", time: "12h-14h", suggestion: "Arroz + feijão + proteína + salada", status: "pending" },
                  { meal: "Lanche", time: "16h-17h", suggestion: "Iogurte natural + castanhas", status: "pending" },
                  { meal: "Jantar", time: "19h-21h", suggestion: "Sopa de legumes + proteína grelhada", status: "pending" },
                ].map((item) => (
                  <div key={item.meal} className="flex items-center justify-between p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                    <div className="flex items-center gap-4">
                      {item.status === "done" ? (
                        <CheckCircle className="w-6 h-6 text-emerald-500" />
                      ) : (
                        <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                      )}
                      <div>
                        <h4 className="font-semibold text-gray-800">{item.meal}</h4>
                        <p className="text-sm text-gray-500">{item.time}</p>
                        <p className="text-sm text-gray-600 mt-1">{item.suggestion}</p>
                      </div>
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400" />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 7-Day Challenges */}
            <Card className="bg-gradient-to-br from-orange-400 to-pink-500 border-0 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Desafios de 7 Dias</CardTitle>
                <CardDescription className="text-orange-50">
                  Transforme seu corpo com leveza
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { title: "Seca com Leveza", progress: 3, total: 7 },
                  { title: "Desinchar sem Sofrer", progress: 0, total: 7 },
                  { title: "Água & Movimento", progress: 0, total: 7 },
                ].map((challenge) => (
                  <div key={challenge.title} className="bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold">{challenge.title}</h4>
                      <span className="text-sm">{challenge.progress}/{challenge.total} dias</span>
                    </div>
                    <Progress value={(challenge.progress / challenge.total) * 100} className="h-2 bg-white/30" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          {/* MODO MENTE */}
          <TabsContent value="mente" className="space-y-6">
            <Card className="bg-gradient-to-br from-purple-400 to-indigo-500 border-0 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Reprogramação Mental</CardTitle>
                <CardDescription className="text-purple-50">
                  Áudios diários para transformar sua relação com comida
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Eu mereço um corpo saudável", duration: "3 min", locked: false },
                    { title: "Alimentação consciente", duration: "4 min", locked: false },
                    { title: "Libertando a culpa", duration: "3 min", locked: true },
                    { title: "Disciplina com amor", duration: "4 min", locked: true },
                  ].map((audio) => (
                    <div key={audio.title} className="flex items-center justify-between bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/30 p-3 rounded-full">
                          <Play className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{audio.title}</h4>
                          <p className="text-sm text-purple-100">{audio.duration}</p>
                        </div>
                      </div>
                      {audio.locked && (
                        <Badge className="bg-amber-400 text-amber-900 border-0">Premium</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emotional Check-in */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="w-5 h-5 text-purple-500" />
                  Check-in Emocional
                </CardTitle>
                <CardDescription>Como você está se sentindo antes de comer?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { emotion: "Fome Real", color: "emerald" },
                    { emotion: "Ansiedade", color: "orange" },
                    { emotion: "Tédio", color: "blue" },
                    { emotion: "Estresse", color: "red" },
                  ].map((item) => (
                    <Button
                      key={item.emotion}
                      variant="outline"
                      className={`h-auto py-4 border-2 hover:bg-${item.color}-50 hover:border-${item.color}-400`}
                    >
                      {item.emotion}
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reset Mode */}
            <Card className="bg-gradient-to-br from-rose-400 to-pink-500 border-0 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Modo Reset 🔄</CardTitle>
                <CardDescription className="text-rose-50">
                  Recaiu? Sem culpa! Vamos reposicionar sua mente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-rose-600 hover:bg-rose-50 font-semibold py-6 text-lg">
                  Iniciar Áudio de Reset (2 min)
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          {/* MODO ALMA */}
          <TabsContent value="alma" className="space-y-6">
            {/* Guided Visualizations */}
            <Card className="bg-gradient-to-br from-pink-400 to-rose-500 border-0 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Visualizações Guiadas</CardTitle>
                <CardDescription className="text-pink-50">
                  Mentalização para transformação profunda
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { title: "Meu corpo ideal", duration: "8 min", locked: false },
                    { title: "Autoamor profundo", duration: "10 min", locked: true },
                    { title: "Identidade de pessoa magra", duration: "12 min", locked: true },
                  ].map((viz) => (
                    <div key={viz.title} className="flex items-center justify-between bg-white/20 backdrop-blur-sm p-4 rounded-xl">
                      <div className="flex items-center gap-3">
                        <div className="bg-white/30 p-3 rounded-full">
                          <Heart className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-semibold">{viz.title}</h4>
                          <p className="text-sm text-pink-100">{viz.duration}</p>
                        </div>
                      </div>
                      {viz.locked && (
                        <Badge className="bg-amber-400 text-amber-900 border-0">Premium</Badge>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Affirmations */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-pink-500" />
                  Afirmações Personalizadas
                </CardTitle>
                <CardDescription>Baseadas no seu progresso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    "Eu sou capaz de emagrecer com leveza e sem sofrimento",
                    "Meu corpo responde positivamente aos meus cuidados",
                    "Eu mereço me sentir bem na minha pele",
                    "Cada dia é uma nova oportunidade de me amar",
                  ].map((affirmation, i) => (
                    <div key={i} className="p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl border border-pink-100">
                      <p className="text-gray-700 italic">"{affirmation}"</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Emotional Graph */}
            <Card className="bg-white/80 backdrop-blur-sm shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingDown className="w-5 h-5 text-emerald-500" />
                  Evolução Emocional
                </CardTitle>
                <CardDescription>Sua jornada de autoconfiança e disciplina</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Autoconfiança</span>
                      <span className="text-sm font-semibold text-emerald-600">85%</span>
                    </div>
                    <Progress value={85} className="h-3 bg-emerald-100" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Disciplina</span>
                      <span className="text-sm font-semibold text-blue-600">72%</span>
                    </div>
                    <Progress value={72} className="h-3 bg-blue-100" />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Autoamor</span>
                      <span className="text-sm font-semibold text-pink-600">90%</span>
                    </div>
                    <Progress value={90} className="h-3 bg-pink-100" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Victory Diary */}
            <Card className="bg-gradient-to-br from-amber-400 to-orange-500 border-0 text-white shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Diário de Vitórias 🏆</CardTitle>
                <CardDescription className="text-amber-50">
                  Celebre suas micro conquistas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { victory: "Bebi 8 copos de água hoje!", time: "Hoje" },
                    { victory: "Fiz uma caminhada de 15 minutos", time: "Ontem" },
                    { victory: "Comi com consciência no almoço", time: "2 dias atrás" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/20 backdrop-blur-sm p-4 rounded-xl flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 mt-0.5" />
                      <div>
                        <p className="font-semibold">{item.victory}</p>
                        <p className="text-sm text-amber-100">{item.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button className="w-full mt-4 bg-white text-orange-600 hover:bg-amber-50 font-semibold">
                  + Adicionar Vitória
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
