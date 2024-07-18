# Multi-step form

![Screenshot of the app](./src/assets/form.jpg)

## Demo

🌐 [Live Demo on GitHub Pages](https://j-a-r-e-k.github.io/formReact/)

## English Description 🇬🇧

The application allows users to enter required data and make product selections. At the end, users receive a summary, and the data can be sent to the backend.

## Features

- Input and validation of necessary user data.
- Selection of one subscription plan and its duration.
- Selection of additional packages.
- Receipt of a summary of choices.
- Ability to edit choices at any time by returning to specific stages.
- Full responsiveness: adaptation to mobile devices, tablets, and desktops.

## Project Structure

- `data`: Contains an array with all necessary product data.
- `App`: Main component that calls subsequent components and stores user selection data.
- `Nav`: Element with buttons to determine progress steps and navigate between them.
- `Form`: Element collecting and displaying user steps.
  - `Input`: Collects user data.
  - `Plan`: Selection field for subscription plan and its duration.
  - `Summary`: Gathers all data and presents user choices.
  - `StepNav`: Buttons for proceeding and returning.
- `End`: Thank you message for completing the form.

## Technologies Used

- React
- Vite
- SASS (using modules)
- Responsive design techniques (media queries, flexbox, CSS Grid)

---

## Polski Opis 🇵🇱

Aplikacja umożliwia użytkownikowi podanie wymaganych danych oraz dokonanie wyboru produktów. Na koniec użytkownik otrzymuje podsumowanie, a dane mogą być przekazane do backendu.

## Funkcjonalności

- Wpisanie i sprawdzenie poprawności potrzebnych danych użytkownika.
- Wybór jednego z planów subskrypcji oraz jego długość.
- Wybór dodatkowych pakietów.
- Otrzymanie podsumowania swojego wyboru.
- Możliwość edycji wyboru w dowolnym momencie poprzez powrót do poszczególnych etapów.
- Pełna responsywność: dostosowanie do urządzeń mobilnych, tabletów i desktopów.

## Struktura projektu

- `data`: Zawiera tablicę z wszystkimi potrzebnymi danymi o produktach.
- `App`: Główny komponent wywołujący kolejne oraz przechowujący dane wyboru użytkownika.
- `Nav`: Element przycisków do określenia kroku postępu oraz przechodzenia pomiędzy nimi.
- `Form`: Element zbierający i wyświetlający kroki użytkownika.
  - `Input`: Zbiera dane o użytkowniku.
  - `Plan`: Pole wyboru planu subskrypcji oraz długości jego trwania.
  - `Summary`: Zbiera wszystkie dane i przedstawia wybory użytkownika.
  - `StepNav`: Przyciski przechodzenia dalej oraz powrotu.
- `End`: Podziękowanie za wypełnienie formularza.

## Zastosowane technologie

- React
- Vite
- SASS (z wykorzystaniem modułów)
- Techniki responsywnego projektowania (media queries, flexbox, CSS Grid)
