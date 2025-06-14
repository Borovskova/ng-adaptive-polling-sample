# ng-adaptive-polling-sample

This Angular sample project demonstrates how to implement **adaptive HTTP polling** in a clean, efficient, and reactive way.

## 🚀 Main Features

- 📡 **Adaptive Polling Strategy**: Dynamically adjusts polling frequency based on HTTP response content, timing, or other conditions.
- ♻️ **RxJS-based Implementation**: Built using RxJS operators to handle timing, retries and error management.
- 🔒 **Okta Authentication (Optional)**: Includes Okta integration for authenticated access, though it's not the core focus.

## 🧠 Learnings

This project is primarily intended to **educate developers** on:

- Setting up a polling mechanism using RxJs operators: `take`, `defer`, `expand`, `filter`, `map`, `of`, `switchMap`, `catchError`, `throwError` and `timer`.
- Implementing **adaptive logic** (e.g. conditional delay) based on server signals.

## 🛠️ Setup

```bash
git clone https://github.com/Borovskova/ng-adaptive-polling-sample.git
npm install
ng serve
