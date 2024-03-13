'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'

const formSchema = z.object({
  email: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  password: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
})

export function SignIn() {
  const signIn = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  function handleSignIn(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...signIn}>
      <form
        onSubmit={signIn.handleSubmit(handleSignIn)}
        className="space-y-3 px-2 py-4"
      >
        <FormField
          control={signIn.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Endereço de e-mail</FormLabel>
              <FormControl>
                <Input placeholder="Endereço de e-mail" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={signIn.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sua senha</FormLabel>
              <FormControl>
                <Input type="password" placeholder="*********" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full">
          Realizar Login
        </Button>
      </form>
    </Form>
  )
}
