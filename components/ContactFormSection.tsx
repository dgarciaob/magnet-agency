'use client';

import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion, useScroll } from 'framer-motion';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(3, { message: 'Tu nombre debe tener al menos 3 caracteres' }),
  celular: z.string().min(9, { message: 'Ingresa un número válido' }),
  email: z.string().email({ message: 'Ingresa un correo válido' }),
  mensaje: z
    .string()
    .min(10, { message: 'Tu mensaje debe tener al menos 10 caracteres' })
    .max(200, { message: 'Tu mensaje debe tener máximo de 200 caracteres' }),
});

const ContactFormSection = () => {
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: '',
      celular: '',
      email: '',
      mensaje: '',
    },
  });

  const onSubmit = (values: z.infer<typeof contactFormSchema>) => {
    console.log(values);
  };

  const ref = React.useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1 0.9'],
  });

  return (
    <motion.div
      className="pt-20"
      ref={ref}
      style={{ scale: scrollYProgress, opacity: scrollYProgress }}
    >
      <div className="p-8 rounded-xl bg-[#1F1F1F] w-full h-full flex flex-row justify-between">
        <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F7FFFA] rounded-lg w-1/3 p-8 shadow-lg">
          <h2 className="text-4xl font-sfprobold font-bold text-[#1F1F1F]">
            ¿Alguna consulta? <br />
            Ayudamos a cumplir tu{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7346F4] to-[#4603FF]">
              <TypeAnimation
                sequence={['sueño', 2000, 'meta', 2000, 'visión', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>
          <p className="text-xl font-sfpro text-slate-500 mt-4">
            ¡Déjanos un mensaje!
          </p>
        </div>
        <div className="w-2/3 flex justify-center items-center font-sfpro">
          <div className="max-w-lg w-full">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5 w-full"
              >
                <FormField
                  control={form.control}
                  name="nombre"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-[#F4FFF8]">
                          Nombre Completo
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Escribe tu nombre" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="celular"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-[#F4FFF8]">
                          Teléfono
                        </FormLabel>
                        <FormControl>
                          <Input placeholder="Escribe tu celular" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-[#F4FFF8]">Correo</FormLabel>
                        <FormControl>
                          <Input placeholder="Escribe tu correo" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <FormField
                  control={form.control}
                  name="mensaje"
                  render={({ field }) => {
                    return (
                      <FormItem>
                        <FormLabel className="text-[#F4FFF8]">
                          Mensaje
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Escribe cómo podemos ayudarte"
                            className="resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    );
                  }}
                />
                <Button type="submit" className="rounded-md w-full font-sfpro">
                  Enviar
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactFormSection;
