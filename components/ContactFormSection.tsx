'use client';

import React, { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

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
import { Oval } from 'react-loader-spinner';
import { Check } from 'lucide-react';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import type { Database } from '../database.types';

const contactFormSchema = z.object({
  nombre: z
    .string()
    .min(3, { message: 'Your name must be at least 3 characters long' }),
  celular: z
    .string()
    .min(9, { message: 'Enter a valid phone number' })
    .max(9, { message: 'Enter a valid phone number' }),
  email: z.string().email({ message: 'Enter a valid email address' }),
  mensaje: z
    .string()
    .min(10, { message: 'Your message must be at least 10 characters long' })
    .max(200, { message: 'Your message must be a maximum of 200 characters' }),
});

const ContactFormSection = () => {
  const supabase = createClientComponentClient<Database>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nombre: '',
      celular: '',
      email: '',
      mensaje: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof contactFormSchema>) => {
    setIsSubmitting(true);
    setIsError(false);
    try {
      await supabase.from('prospects').insert({
        email: values.email,
        name: values.nombre,
        phone: values.celular,
        requirement: values.mensaje,
      });
      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 2000);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      className="pt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.3 }}
      viewport={{ once: true }}
    >
      <div className="md:p-8 p-1 rounded-xl w-full h-full md:flex md:flex-row md:items-stretch md:space-y-0 justify-between flex flex-col items-center space-y-10">
        <div className="bg-[#1F1F1F] rounded-lg md:w-1/3 p-8 shadow-lg">
          <h2 className="md:text-4xl text-3xl font-sfprobold font-bold text-white">
            ¿Questions? <br />
            We help you accomplish your
            <br />{' '}
            <span className="text-[#FFFCD6]">
              <TypeAnimation
                sequence={['dream', 2000, 'goal', 2000, 'vision', 2000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h2>
          <p className="text-xl font-sfpro text-slate-300 mt-4">
            ¡Say something nice!
          </p>
        </div>
        <div className="md:w-2/3 flex justify-center items-center w-full font-sfpro">
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
                        <FormLabel className="text-[#1F1F1F]">Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Type your name" {...field} />
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
                        <FormLabel className="text-[#1F1F1F]">Phone</FormLabel>
                        <FormControl>
                          <Input placeholder="Type your phone" {...field} />
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
                        <FormLabel className="text-[#1F1F1F]">Email</FormLabel>
                        <FormControl>
                          <Input placeholder="Type your email" {...field} />
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
                        <FormLabel className="text-[#1F1F1F]">
                          Message
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Lets start a conversation!"
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
                  {isSubmitting ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <Oval
                        height={20}
                        width={20}
                        color="#F7FFFA"
                        wrapperStyle={{}}
                        wrapperClass=""
                        visible={true}
                        ariaLabel="oval-loading"
                        secondaryColor="#D7E4E5"
                        strokeWidth={5}
                        strokeWidthSecondary={5}
                      />
                    </motion.div>
                  ) : showSuccessMessage ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      <Check className="text-green-500" />
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    >
                      Send
                    </motion.div>
                  )}
                </Button>
                {isError && (
                  <p className="text-red-500 text-sm">
                    There was an error trying to send your message, please try
                    again.
                  </p>
                )}
              </form>
            </Form>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactFormSection;
