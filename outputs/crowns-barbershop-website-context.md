# Crowns Hair Salon & BarberShop — Website Project Context

## Purpose

This file captures the agreed direction for a polished, modern website for **Crowns Hair Salon & BarberShop**. It is intended as a working reference for design, content, and implementation decisions.

## Original Mockup Direction

The initial request was to turn the supplied Crowns logo into a realistic barbershop website mockup suitable for presenting to a potential client.

Suggested site elements:

- Hero section with a prominent **Book Now** call to action
- Services and pricing
- Barber/team profiles
- Shop or gallery imagery
- Customer reviews
- Location and hours
- Mobile-friendly design
- Optional English/Spanish language selector
- WhatsApp booking button

The visual goal is a contemporary, premium barbershop experience rather than a generic website template.

## Recommended Website Navigation

```text
Home | Services | Barbers | Locations | Gallery | Reviews | About | Contact
```

Because Crowns has two locations, **Locations** should be a prominent navigation item—not something buried within Contact.

## Two-Location Website Strategy

Create a dedicated Locations section or page that clearly presents both locations.

### Location card example

```text
CROWNS — DOWNTOWN
123 Main Street
City, State 12345
(555) 123-4567

Hours
Mon–Sat: 9 AM–7 PM
Sun: 10 AM–4 PM

[ Book This Location ]  [ Get Directions ]
```

```text
CROWNS — WEST SIDE
456 Market Street
City, State 12345
(555) 987-6543

Hours
Mon–Sat: 9 AM–7 PM
Sun: 10 AM–4 PM

[ Book This Location ]  [ Get Directions ]
```

Replace the placeholder addresses, phone numbers, hours, and location names with Crowns’ confirmed details.

### Location-specific pages

Use separate pages or sections for each shop, for example:

- `/locations/downtown`
- `/locations/west-side`

Each location can have its own address, hours, phone number, Google Maps directions, photos, services, team members, and booking link. This also improves local search visibility for neighborhood-specific searches.

## Booking Flow

### Main Book Now entry point

The main **Book Now** button should first ask the customer to select a location:

```text
WHERE WOULD YOU LIKE TO BOOK?

Crowns — Downtown
[ Select Location ]

Crowns — West Side
[ Select Location ]
```

This prevents customers from booking at the wrong shop.

### Mobile booking access

Keep booking and locations immediately accessible on mobile. A compact mobile navigation could emphasize:

```text
Home | Book | Locations | Call
```

The **Book** action should open the same location-selection experience.

## WhatsApp Booking Workflow

Crowns does not need a Square integration or an embedded scheduling calendar for this approach. The website can use a WhatsApp click-to-chat link that opens a pre-filled message.

```text
Website → Location → Barber → WhatsApp → Barber confirms appointment
```

No WhatsApp API is required, and the website does not need to store customer appointment information. The customer and barber complete the scheduling conversation in WhatsApp.

### Location-specific WhatsApp message

When a visitor chooses a location, open WhatsApp with a prepared message such as:

> Hi Crowns! I’d like to book an appointment at the Downtown location.
>
> Service:
> Preferred date:
> Preferred time:
> Barber:

For the other shop, the message should automatically identify **West Side** (or its final location name).

Each location can link to a different WhatsApp number. If both locations use one number, keep one destination number and include the selected location in the message.

## Barber Selection

The recommended sequence is **location first, then barber**.

```text
Step 1 — Choose Location
Step 2 — Choose Your Barber
Step 3 — Continue to WhatsApp
```

### Example barber selector

```text
CHOOSE YOUR BARBER

Marcus — Master Barber
[ Book with Marcus ]

Jay — Barber
[ Book with Jay ]

Chris — Barber
[ Book with Chris ]
```

Selecting a barber should open WhatsApp with both the location and barber already filled in:

> Hi Crowns! I’d like to book an appointment.
>
> Location: Downtown
> Barber: Marcus
> Service: Haircut
> Preferred date:
> Preferred time:

The customer fills in the remaining details and sends the message.

## Barber Team Section

Show barbers as professional cards on the main site as well as in the booking flow.

```text
[ Barber photo ]
MARCUS
Master Barber
Fades • Haircuts • Beard

[ Book with Marcus ]
```

The booking button should go into the same WhatsApp workflow, preselecting that barber and—where applicable—their location.

## Notes on External Booking Alternatives

If Crowns later decides to keep an existing scheduling service such as Square Appointments, **Book This Location** can simply be a normal external link to that location’s schedule. No Square widget or embedded calendar is necessary.

For the current direction, WhatsApp is preferred because it is simple for a small shop and lets the barber personally confirm the appointment.

## Implementation Checklist

- Confirm final location names, addresses, phones, hours, and Google Maps links.
- Confirm whether locations share a WhatsApp number.
- Confirm each barber’s location, title, specialties, photo, and booking availability.
- Create location-specific WhatsApp click-to-chat links with pre-filled messages.
- Design the location selector, barber selector, and responsive mobile experience.
- Add location pages/sections with location-specific SEO content.
