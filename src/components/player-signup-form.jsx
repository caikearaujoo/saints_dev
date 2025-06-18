"use client"
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { IconArrowLeft } from "@tabler/icons-react"
import api from "../services/api"

export function PlayerSignupForm({ onBack }) {
  const [formData, setFormData] = useState({
    // Dados da Pessoa
    nome: "",
    email: "",
    idade: "",
    matricula: "",
    curso: "",
    periodo: "",
    telefone: "",
    // Dados do Player
    modalidade: "",
    role: "",
    eloRanking: "",
    experiencia: "",
    disponibilidade: "",
    linkPerfil: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      // 1. Cria a Pessoa
      const pessoaResponse = await api.post("/usuarios", {
        nome: formData.nome,
        email: formData.email,
        idade: Number(formData.idade),
        matricula: formData.matricula,
        curso: formData.curso,
        periodo: Number(formData.periodo),
        telefone: formData.telefone,
        dataInscricao: new Date().toISOString(),
      })

      const pessoaId = pessoaResponse.data.id

      // 2. Cria o Player
      const playerResponse = await api.post("/players", {
        pessoaId,
        modalidade: formData.modalidade,
        role: formData.role,
        eloRanking: formData.eloRanking,
        experiencia: formData.experiencia,
        disponibilidade: formData.disponibilidade,
        linkPerfil: formData.linkPerfil,
      })

      alert("Candidatura enviada com sucesso!")
      console.log("Player criado:", playerResponse.data)

      setFormData({
        nome: "",
        email: "",
        idade: "",
        matricula: "",
        curso: "",
        periodo: "",
        telefone: "",
        modalidade: "",
        role: "",
        eloRanking: "",
        experiencia: "",
        disponibilidade: "",
        linkPerfil: "",
      })
    } catch (error) {
      console.error("Erro ao enviar candidatura:", error)
      alert("Erro ao enviar candidatura. Verifique os dados e tente novamente.")
    }
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const getRolesByModalidade = (modalidade) => {
    const roles = {
      lol: ["Top", "Jungle", "Mid", "ADC", "Suporte"],
      valorant: ["Duelista", "Controlador", "Iniciador", "Sentinela", "Flex"],
      cs2: ["Entry Fragger", "AWPer", "Support", "IGL", "Lurker"],
      fifa: ["Pro Clubs", "Ultimate Team"],
      wildRift: ["Top", "Jungle", "Mid", "ADC", "Suporte"],
      brawlStars: ["Tank", "Artilharia", "Marksman", "Damage Dealer", "Controller", "Assassin", "Support"],
      tft: ["Individual", "Dupla", "Trio+"],
      clashRoyale: ["1v1", "2v2"],
      outros: ["Outro"],
    }
    return roles[modalidade] || []
  }

  return (
    <div className="mx-auto w-full max-w-2xl rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors"
        >
          <IconArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </button>
      </div>
      <div className="flex items-center mb-6">
        <div className="p-4 rounded-full bg-yellow-100 dark:bg-yellow-900/30 group-hover:bg-yellow-200 dark:group-hover:bg-yellow-800/50 transition-colors flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-yellow-600 dark:text-yellow-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <circle cx="12" cy="12" r="3" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6M12 9v6" />
            <rect x="6" y="8" width="12" height="8" rx="2" ry="2" />
          </svg>
        </div>

        <div>
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Candidatura para Player</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">Preencha suas informações para se candidatar</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Dados Pessoais */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-700 pb-2">
            Dados Pessoais
          </h3>

          <LabelInputContainer>
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              value={formData.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              placeholder="João Silva Santos"
              required
            />
          </LabelInputContainer>

          <div className="grid md:grid-cols-2 gap-4">
            <LabelInputContainer>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="joao@ufu.br"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="idade">Idade</Label>
              <Input
                id="idade"
                type="number"
                value={formData.idade}
                onChange={(e) => handleInputChange("idade", e.target.value)}
                placeholder="20"
                required
              />
            </LabelInputContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <LabelInputContainer>
              <Label htmlFor="matricula">Matrícula</Label>
              <Input
                id="matricula"
                value={formData.matricula}
                onChange={(e) => handleInputChange("matricula", e.target.value)}
                placeholder="12345678901"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                value={formData.telefone}
                onChange={(e) => handleInputChange("telefone", e.target.value)}
                placeholder="(34) 99999-9999"
                required
              />
            </LabelInputContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <LabelInputContainer>
              <Label htmlFor="curso">Curso</Label>
              <Input
                id="curso"
                value={formData.curso}
                onChange={(e) => handleInputChange("curso", e.target.value)}
                placeholder="Ciência da Computação"
                required
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="periodo">Período</Label>
              <Select onValueChange={(value) => handleInputChange("periodo", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o período" />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((periodo) => (
                    <SelectItem key={periodo} value={periodo.toString()}>
                      {periodo}º Período
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </LabelInputContainer>
          </div>
        </div>

        {/* Dados do Player */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-700 pb-2">
            Informações de Player
          </h3>

          <div className="grid md:grid-cols-2 gap-4">
            <LabelInputContainer>
              <Label htmlFor="modalidade">Modalidade Principal</Label>
              <Select onValueChange={(value) => handleInputChange("modalidade", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a modalidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lol">League of Legends</SelectItem>
                  <SelectItem value="valorant">Valorant</SelectItem>
                  <SelectItem value="cs2">Counter-Strike 2</SelectItem>
                  <SelectItem value="fifa">FIFA</SelectItem>
                  <SelectItem value="wild rift">Wild Rift</SelectItem>
                  <SelectItem value="tft">TFT</SelectItem>
                  <SelectItem value="brawl stars">Brawl Stars</SelectItem>
                  <SelectItem value="clash royale">Clash Royale</SelectItem>
                  <SelectItem value="outros">Outros</SelectItem>
                </SelectContent>
              </Select>
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="role">Role/Posição</Label>
              <Select onValueChange={(value) => handleInputChange("role", value)} disabled={!formData.modalidade}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a role" />
                </SelectTrigger>
                <SelectContent>
                  {getRolesByModalidade(formData.modalidade).map((role) => (
                    <SelectItem key={role} value={role.toLowerCase()}>
                      {role}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </LabelInputContainer>
          </div>

          <LabelInputContainer>
            <Label htmlFor="eloRanking">Elo/Ranking Atual</Label>
            <Input
              id="eloRanking"
              value={formData.eloRanking}
              onChange={(e) => handleInputChange("eloRanking", e.target.value)}
              placeholder="Ex: Diamante 2, Imortal 1, Global Elite..."
              required
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="linkPerfil">Link do Perfil (Opcional)</Label>
            <Input
              id="linkPerfil"
              value={formData.linkPerfil}
              onChange={(e) => handleInputChange("linkPerfil", e.target.value)}
              placeholder="Link do seu perfil no jogo, op.gg, tracker.gg, etc."
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="experiencia">Experiência Competitiva (Opcional)</Label>
            <Textarea
              id="experiencia"
              value={formData.experiencia}
              onChange={(e) => handleInputChange("experiencia", e.target.value)}
              placeholder="Conte sobre sua experiência em competições, times anteriores, conquistas..."
              className="min-h-[100px]"
            />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="disponibilidade">Disponibilidade para Treinos</Label>
            <Select onValueChange={(value) => handleInputChange("disponibilidade", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Qual sua disponibilidade?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="diaria">Diária (todos os dias)</SelectItem>
                <SelectItem value="semanal">Semanal (3-5 dias por semana)</SelectItem>
                <SelectItem value="fds">Fins de semana</SelectItem>
                <SelectItem value="flexivel">Flexível</SelectItem>
              </SelectContent>
            </Select>
          </LabelInputContainer>
        </div>

        <button
          type="submit"
          className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 font-medium text-black shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset]"
        >
          Enviar Candidatura para Player &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  )
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-yellow-600 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  )
}

const LabelInputContainer = ({ children, className }) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>
}
  