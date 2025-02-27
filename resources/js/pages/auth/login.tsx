import { GuestLayout } from '@/layouts/guest-layout';
import { FormResponse } from '@/utils/constant';
import { Link, useForm } from '@inertiajs/react';
import React, { useEffect } from 'react';
import { Toaster } from 'sonner';
import { Button, TextField } from 'ui';

export default function Login() {

    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: ''
    });

    const submit = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        post(route('auth.attempt'), FormResponse);
    };

    return (
        <>
            <Toaster />
            <div className='container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0'>
                <div className='relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex'>
                    <img className='absolute inset-0 h-screen object-cover w-full' src="https://www.dicsinnovatives.com/blog/wp-content/uploads/2023/08/python-blog-image.jpg" alt="" />
                    <div className='absolute inset-0 h-screen w-full bg-zinc-900 opacity-50' />
                    <div className='relative z-20 flex items-center text-lg font-medium'>
                        Python Quiz
                    </div>
                    <div className='relative z-20 mt-auto'>
                        <blockquote className='space-y-2'>
                            <p className='text-lg'>
                                good delivering insight driven by data, kudos retha
                            </p>
                            <footer className='text-sm'>Retha</footer>
                        </blockquote>
                    </div>
                </div>
                <div className='lg:p-8'>
                    <form onSubmit={submit} className='mx-auto flex w-full flex-col justify-center sm:max-w-md'>
                        <div className='flex flex-col space-y-2 text-left mb-4'>
                            <h1 className='text-2xl font-semibold tracking-tight'>Centrum login</h1>
                            <p className='text-sm text-muted-foreground'>
                                Enter your email and password below <br />
                                to log into your account
                            </p>
                        </div>
                        <TextField
                            label="Email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="one-time-code"
                            onChange={(v) => setData("email", v)}
                            errorMessage={errors.email}
                            isRequired
                            className='mb-2'
                        />
                        <TextField
                            isRevealable
                            label="Password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="one-time-code"
                            onChange={(v) => setData("password", v)}
                            errorMessage={errors.password}
                            isRequired
                            className='mb-2'
                        />
                        <Button isDisabled={processing} className="mt-3" type="submit">
                            Login
                        </Button>
                        {/* <div className='flex items-center mt-2' >
                            <Link href={route('auth.forgot-password.form')} >
                                <p className='text-primary hover:underline text-sm' >Forgot Password?</p>
                            </Link>
                        </div> */}
                    </form>
                </div>
            </div>
        </>
    );
}

Login.layout = (page: React.ReactNode) => <GuestLayout children={page} />;
