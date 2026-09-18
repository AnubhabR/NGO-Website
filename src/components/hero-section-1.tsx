'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
    ArrowRight,
    Check,
    Clock3,
    Globe,
    Leaf,
    Mail,
    MapPin,
    MessageCircle,
    Phone,
    Quote,
    Send,
    Sprout,
    SunMedium,
    TreePine,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroHeader } from '@/components/hero-section-1-header'
import { assetUrl } from '@/lib/assets'

const isS3Configured = Boolean(process.env.NEXT_PUBLIC_ASSETS_URL)

const steps = [
    {
        title: 'Seed Selection',
        description: 'Choosing the right seeds is crucial for successful reforestation.',
        icon: Sprout,
    },
    {
        title: 'Site Preparation',
        description: 'Preparing the land for planting, including clearing and soil enhancement.',
        icon: Leaf,
    },
    {
        title: 'Planting',
        description: 'Carefully planting seeds or saplings in the prepared areas.',
        icon: TreePine,
    },
    {
        title: 'Maintenance',
        description: 'Regular care including watering, weeding, and monitoring growth.',
        icon: SunMedium,
    },
]

const highlightStats = [
    { label: 'saplings planted', value: '1200+' },
    { label: 'volunteers reached', value: '680+' },
    { label: 'forest zones restored', value: '08' },
]

const testimonials = [
    {
        quote:
            'The reforestation efforts have brought new life to our community, improving air quality and providing a habitat for wildlife.',
        name: 'John Doe',
        role: 'Environmental Advocate',
    },
    {
        quote:
            'I’m so proud to be part of the Nature Delight Foundation’s reforestation initiative. It’s amazing to see the change we can make together.',
        name: 'Jane Smith',
        role: 'Volunteer',
    },
]

const heroImage = isS3Configured ? assetUrl('nature-delight/banner.jpg') : '/forest-hero.svg'
const galleryImages = [
    isS3Configured ? assetUrl('nature-delight/site-1.jpg') : '/forest-hero.svg',
    isS3Configured ? assetUrl('nature-delight/site-2.jpg') : '/forest-hero.svg',
    isS3Configured ? assetUrl('nature-delight/site-3.jpg') : '/forest-hero.svg',
]

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-hidden bg-[radial-gradient(circle_at_top,rgba(139,170,104,0.15),transparent_35%)] text-foreground">
                <section id="home" className="relative pt-28 md:pt-36">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6">
                        <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-[1.05fr_0.95fr]">
                            <div className="w-full">
                                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-2 text-xs font-medium text-primary sm:px-4 sm:text-sm">
                                    <Leaf className="size-4" />
                                    Enhancing Nature&apos;s Beauty since 2020
                                </span>

                                <h1 className="mt-7 max-w-full text-[2.55rem] font-semibold leading-[1.02] tracking-[-0.04em] text-foreground sm:max-w-xl sm:text-5xl md:text-6xl">
                                    Restoring forests, protecting life, and building a greener tomorrow.
                                </h1>

                                <p className="mt-5 max-w-full text-base text-muted-foreground sm:max-w-xl sm:text-lg">
                                    At Nature Delight Foundation, we focus on reforestation, environmental sustainability, and building a better future for our planet.
                                </p>

                                <div className="mt-8 flex w-full flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start">
                                    <Button
                                        className="w-full sm:w-auto"
                                        nativeButton={false}
                                        render={
                                            <Link href="#volunteer">
                                                <span className="inline-flex items-center gap-2">
                                                    Join us <ArrowRight className="size-4" />
                                                </span>
                                            </Link>
                                        }
                                    />
                                    <Button
                                        className="w-full sm:w-auto"
                                        variant="outline"
                                        nativeButton={false}
                                        render={<Link href="#initiatives">Explore initiatives</Link>}
                                    />
                                </div>

                                <div className="mt-10 grid max-w-lg gap-5 sm:grid-cols-3 sm:gap-6">
                                    {highlightStats.map((stat) => (
                                        <div key={stat.label}>
                                            <div className="text-3xl font-semibold text-foreground sm:text-4xl">{stat.value}</div>
                                            <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="relative w-full">
                                <div className="absolute -left-6 top-10 h-20 w-20 rounded-full bg-primary/20 blur-3xl sm:h-28 sm:w-28" />
                                <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-accent/30 blur-3xl sm:h-32 sm:w-32" />
                                <div className="relative overflow-hidden rounded-[28px] border border-primary/10 bg-card p-2 shadow-[0_30px_70px_rgba(64,81,39,0.18)] sm:p-3">
                                    <div className="overflow-hidden rounded-[20px] bg-muted">
                                        <Image
                                            src={heroImage}
                                            alt="Nature Delight Foundation reforestation campaign"
                                            width={1200}
                                            height={900}
                                            className="h-[240px] w-full object-cover sm:h-[360px] lg:h-[540px]"
                                            priority
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="initiatives" className="mx-auto max-w-7xl px-6 py-24">
                    <div className="mx-auto max-w-2xl text-center">
                        <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">Methods of Reforestation</p>
                        <h2 className="mt-4 text-3xl font-semibold md:text-5xl">A practical path from seed to thriving forest.</h2>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                        {steps.map(({ title, description, icon: Icon }, index) => (
                            <div key={title} className="rounded-3xl border border-border bg-card p-6 shadow-sm">
                                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                    <Icon className="size-5" />
                                </div>
                                <div className="mt-5 text-sm font-semibold uppercase tracking-[0.24em] text-primary/80">Step {index + 1}</div>
                                <h3 className="mt-3 text-2xl font-semibold">{title}</h3>
                                <p className="mt-3 text-base leading-7 text-muted-foreground">{description}</p>
                            </div>
                        ))}
                    </div>
                </section>

                <section id="about" className="bg-primary/5 py-24">
                    <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[0.9fr_1.1fr]">
                        <div className="overflow-hidden rounded-[28px] border border-primary/10 bg-card p-3 shadow-[0_30px_60px_rgba(64,81,39,0.16)]">
                            <Image
                                src={galleryImages[0]}
                                alt="Reforestation site"
                                width={900}
                                height={760}
                                className="h-full min-h-105 w-full rounded-[20px] object-cover"
                            />
                        </div>

                        <div className="flex flex-col justify-center">
                            <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">Our Mission</p>
                            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Growing resilient ecosystems for the future.</h2>
                            <p className="mt-5 text-lg text-muted-foreground">
                                We work with communities, volunteers, and local stakeholders to restore native landscapes, improve biodiversity, and create long-term environmental resilience.
                            </p>

                            <ul className="mt-8 space-y-4">
                                {[
                                    'Native tree plantation and biodiversity restoration',
                                    'Community-led sustainability education and action',
                                    'Long-term ecosystem monitoring and care',
                                ].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-base text-foreground">
                                        <span className="flex size-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                                            <Check className="size-4" />
                                        </span>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>

                <section id="locations" className="mx-auto max-w-7xl px-6 py-24">
                    <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">Our Reforestation Locations</p>
                            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Planting across communities in Maharashtra.</h2>
                        </div>
                        <Link href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-primary">
                            Connect with us <ArrowRight className="size-4" />
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="overflow-hidden rounded-[28px] border border-border bg-card p-3 shadow-sm">
                            <Image
                                src={galleryImages[1]}
                                alt="Forest restoration map and landscape"
                                width={1200}
                                height={760}
                                className="h-105 w-full rounded-[22px] object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            {[
                                { name: 'Warje', area: 'Pune, Maharashtra', text: 'Urban biodiversity restoration and community green cover development.' },
                                { name: 'Rajgad', area: 'Western Ghats corridor', text: 'Native sapling plantation and watershed conservation support.' },
                                { name: 'Local forest belts', area: 'Rural clusters', text: 'Volunteer-driven maintenance and long-term ecological monitoring.' },
                            ].map((site) => (
                                <div key={site.name} className="rounded-3xl border border-border bg-card p-6">
                                    <div className="flex items-center gap-2 text-primary">
                                        <MapPin className="size-4" />
                                        <span className="text-sm font-medium uppercase tracking-[0.2em]">{site.area}</span>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-semibold">{site.name}</h3>
                                    <p className="mt-3 text-base text-muted-foreground">{site.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-primary/5 py-24">
                    <div className="mx-auto max-w-7xl px-6">
                        <div className="mx-auto max-w-2xl text-center">
                            <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">What People Are Saying</p>
                            <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Voices from our supporters and volunteers.</h2>
                        </div>

                        <div className="mt-12 grid gap-6 lg:grid-cols-2">
                            {testimonials.map((item) => (
                                <div key={item.name} className="rounded-[28px] border border-border bg-card p-8 shadow-sm">
                                    <Quote className="size-10 text-primary/80" />
                                    <p className="mt-5 text-lg leading-8 text-foreground">“{item.quote}”</p>
                                    <div className="mt-6 border-t border-border pt-5">
                                        <div className="font-semibold text-foreground">{item.name}</div>
                                        <div className="text-sm text-muted-foreground">{item.role}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="volunteer" className="mx-auto max-w-7xl px-6 py-24">
                    <div className="overflow-hidden rounded-[32px] border border-primary/10 bg-card p-8 shadow-[0_30px_60px_rgba(64,81,39,0.12)] md:p-12">
                        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
                            <div>
                                <p className="text-sm font-medium uppercase tracking-[0.28em] text-primary">Join Our Reforestation Effort!</p>
                                <h2 className="mt-4 text-3xl font-semibold md:text-5xl">Help us restore ecosystems and protect wildlife.</h2>
                                <p className="mt-5 max-w-xl text-lg text-muted-foreground">
                                    Your contribution can make a difference. Volunteer with us and help plant the future of our planet.
                                </p>
                            </div>

                            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                                <Button
                                    nativeButton={false}
                                    render={<Link href="#contact">Volunteer</Link>}
                                />
                                <Button
                                    variant="outline"
                                    nativeButton={false}
                                    render={<Link href="#contact">Donate</Link>}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <footer id="contact" className="border-t border-border bg-card/70">
                    <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr_1fr]">
                        <div>
                            <div className="flex items-center gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                                    <Leaf className="size-5" />
                                </div>
                                <div>
                                    <div className="text-lg font-semibold text-foreground">Nature Delight Foundation</div>
                                </div>
                            </div>
                            <p className="mt-5 max-w-md text-base text-muted-foreground">
                                We believe in protecting the environment through sustainable action, local participation, and reforestation at every scale.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Quick Links</h3>
                            <ul className="mt-5 space-y-3 text-base text-foreground">
                                <li><Link href="#home">Home</Link></li>
                                <li><Link href="#about">About</Link></li>
                                <li><Link href="#initiatives">Initiatives</Link></li>
                                <li><Link href="#locations">Locations</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-muted-foreground">Contact Us</h3>
                            <ul className="mt-5 space-y-4 text-base text-foreground">
                                <li className="flex items-start gap-3">
                                    <Phone className="mt-0.5 size-4 text-primary" />
                                    <span>+91 8087608729</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Mail className="mt-0.5 size-4 text-primary" />
                                    <span>naturedelightfoundation@gmail.com</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <MapPin className="mt-0.5 size-4 text-primary" />
                                    <span>Warje, Pune, Maharashtra</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <Clock3 className="mt-0.5 size-4 text-primary" />
                                    <span>Mon - Sat: 9AM - 7PM</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-border">
                        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-5 text-sm text-muted-foreground md:flex-row">
                            <p>© 2024 Nature Delight Foundation - All Rights Reserved.</p>
                            <div className="flex items-center gap-4 text-foreground">
                                <Link href="https://www.facebook.com" aria-label="Facebook" className="hover:text-primary"><Globe className="size-4" /></Link>
                                <Link href="https://www.instagram.com" aria-label="Instagram" className="hover:text-primary"><MessageCircle className="size-4" /></Link>
                                <Link href="mailto:naturedelightfoundation@gmail.com" aria-label="Mail" className="hover:text-primary"><Send className="size-4" /></Link>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}
