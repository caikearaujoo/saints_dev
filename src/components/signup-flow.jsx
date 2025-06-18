"use client"
import { useState } from "react"
import { RoleSelection } from "./role-selection"
import { StaffSignupForm } from "./staff-signup-form"
import { PlayerSignupForm } from "./player-signup-form"

export function SignupFlow() {
  const [selectedRole, setSelectedRole] = useState(null)

  const handleRoleSelect = (role) => {
    setSelectedRole(role)
  }

  const handleBack = () => {
    setSelectedRole(null)
  }

  if (selectedRole === "staff") {
    return <StaffSignupForm onBack={handleBack} />
  }

  if (selectedRole === "player") {
    return <PlayerSignupForm onBack={handleBack} />
  }

  return <RoleSelection onRoleSelect={handleRoleSelect} />
}
