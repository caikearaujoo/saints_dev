"use client";
import { useState } from "react"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { IconArrowLeft, IconUsers } from "@tabler/icons-react"

export function StaffSignupForm({
  onBack
}) {
  const [formData, setFormData] = useState({
    // Dados da Pessoa
    nome: "",
    email: "",
    idade: "",
    matricula: "",
    curso: "",
    periodo: "",
    telefone: "",
    // Dados do Staff
    areaInteresse: "",
    habilidades: "",
    experiencia: "",
    disponibilidade: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Staff form submitted:", formData)
    // Aqui você implementará a lógica para salvar no banco
  }

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div
      className="shadow-input mx-auto w-full max-w-2xl rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <div className="flex items-center mb-6">
        <button
          onClick={onBack}
          className="flex items-center text-neutral-600 dark:text-neutral-300 hover:text-neutral-800 dark:hover:text-neutral-100 transition-colors">
          <IconArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </button>
      </div>
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30 mr-4">
          <IconUsers className="h-6 w-6 text-purple-600 dark:text-purple-400" />
        </div>
        <div>
          <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">Candidatura para Staff</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-300">Preencha suas informações para se candidatar</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Dados Pessoais */}
        <div className="space-y-4">
          <h3
            className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-700 pb-2">
            Dados Pessoais
          </h3>

          <LabelInputContainer>
            <Label htmlFor="nome">Nome Completo</Label>
            <Input
              id="nome"
              value={formData.nome}
              onChange={(e) => handleInputChange("nome", e.target.value)}
              placeholder="João Silva Santos"
              required />
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
                required />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="idade">Idade</Label>
              <Input
                id="idade"
                type="number"
                value={formData.idade}
                onChange={(e) => handleInputChange("idade", e.target.value)}
                placeholder="20"
                required />
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
                required />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="telefone">Telefone</Label>
              <Input
                id="telefone"
                value={formData.telefone}
                onChange={(e) => handleInputChange("telefone", e.target.value)}
                placeholder="(34) 99999-9999"
                required />
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
                required />
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

        {/* Dados do Staff */}
        <div className="space-y-4">
          <h3
            className="text-lg font-semibold text-neutral-800 dark:text-neutral-200 border-b border-neutral-200 dark:border-neutral-700 pb-2">
            Informações de Staff
          </h3>

          <LabelInputContainer>
            <Label htmlFor="areaInteresse">Área de Interesse</Label>
            <Select onValueChange={(value) => handleInputChange("areaInteresse", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione sua área de interesse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="marketing">Marketing e Comunicação</SelectItem>
                <SelectItem value="design">Design Gráfico</SelectItem>
                <SelectItem value="eventos">Organização de Eventos</SelectItem>
                <SelectItem value="desenvolvimento">Desenvolvimento</SelectItem>
                <SelectItem value="financeiro">Financeiro</SelectItem>
                <SelectItem value="juridico">Jurídico</SelectItem>
                <SelectItem value="rh">Recursos Humanos</SelectItem>
                <SelectItem value="outros">Outros</SelectItem>
              </SelectContent>
            </Select>
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="habilidades">Habilidades</Label>
            <Textarea
              id="habilidades"
              value={formData.habilidades}
              onChange={(e) => handleInputChange("habilidades", e.target.value)}
              placeholder="Descreva suas principais habilidades e competências..."
              className="min-h-[100px]"
              required />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="experiencia">Experiência</Label>
            <Textarea
              id="experiencia"
              value={formData.experiencia}
              onChange={(e) => handleInputChange("experiencia", e.target.value)}
              placeholder="Conte sobre suas experiências anteriores relevantes..."
              className="min-h-[100px]"
              required />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label htmlFor="disponibilidade">Disponibilidade</Label>
            <Select onValueChange={(value) => handleInputChange("disponibilidade", value)}>
              <SelectTrigger>
                <SelectValue placeholder="Qual sua disponibilidade?" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="integral">Tempo Integral (20+ horas/semana)</SelectItem>
                <SelectItem value="parcial">Tempo Parcial (10-20 horas/semana)</SelectItem>
                <SelectItem value="pontual">Pontual (menos de 10 horas/semana)</SelectItem>
                <SelectItem value="eventos">Apenas para eventos específicos</SelectItem>
              </SelectContent>
            </Select>
          </LabelInputContainer>
        </div>

        <button
          type="submit"
          className="group/btn relative block h-12 w-full rounded-md bg-gradient-to-br from-purple-600 to-blue-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900 dark:shadow-[0px_1px_0px_0px_#27272a_inset,0px_-1px_0px_0px_#27272a_inset]">
          Enviar Candidatura para Staff &rarr;
          <BottomGradient />
        </button>
      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span
        className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span
        className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
}

const LabelInputContainer = ({
  children,
  className
}) => {
  return <div className={cn("flex w-full flex-col space-y-2", className)}>{children}</div>;
}
