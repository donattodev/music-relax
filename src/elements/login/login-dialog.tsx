import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog'
import { SignIn } from '../form/sign-in'

export function LoginDialog() {
  return (
    <Dialog>
      <DialogTrigger className="uppercase">Login</DialogTrigger>
      <DialogContent>
        <DialogClose disabled />
        <Tabs defaultValue="account" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="sign-in" className="font-bold tracking-wider">
              Entrar
            </TabsTrigger>
            <TabsTrigger
              value="register"
              disabled
              className="font-bold tracking-wider"
            >
              Criar conta
            </TabsTrigger>
          </TabsList>
          <TabsContent value="sign-in">
            <SignIn />
          </TabsContent>
          <TabsContent value="register"></TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
