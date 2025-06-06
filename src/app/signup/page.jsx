import { SignupFlow } from "@/components/signup-flow"

export default function SignupPage() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <SignupFlow />
    </div>
  );
}
