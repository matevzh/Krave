# 👨‍🌾 Agricultural ecnonomy SaaS App 👩‍🌾

A multi-platform application made for my diploma in my 2. and last year of college. This is the original mono-repository for my solo development of the app with the original idea coming from my brother. For the entire backend api I used NestJS and React with Vite for the browser frontend. This app is primarily targeted to a slovenian dairy farmer market but could be later expanded upon.

## 👨‍💻 Technologies

- NestJS
- React.js
- Vite
- Docker
- Redis
- PostgreSQL
- Tailwind CSS
- Android Studio ==(Kotlin)==
- Swift (IOS app)

## 🎉 Features

The application is designed to help dairy farmers manage livestock records, treatments, and regulatory obligations. The system allows users to record, monitor, and organize farm data required for daily operations and compliance with national livestock regulations.

1. User and farm management
2. Animal management
3. Animal movement tracking
4. Treatment and veterinary records
5. Withdrawal period tracking
6. Medicine inventory
7. Alerts and deadlines
8. Reporting and data overview

## 👨‍🍳 The process

I started with making a database schema in Toad Data modeler:

Then i made a frontend prototype with Figma AI for the layout of the web application, as it would serve as a good base for the upcoming android application. At the moment of writing I have also made the AI add the notification and pdf export features. I might regret that later as it may lead to some refactoring down the line, but for now the real focus for me is on the backend. I want to make a production ready, fast and reliable api that can handle a good amount of requests. But for starters I just made the entities, providers, controllers and services in NestJS.
