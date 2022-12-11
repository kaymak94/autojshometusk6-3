beforeEach(() => {
  cy.visit("/");
  cy.login("test@test.com", "test");
});

it("Should add books", () => {
  cy.addBook(
    "Каштанка, рассказ, А.П.Чехов",
    "Идиот, роман, Ф.М. Достоевский",
    "Повесть о настоящем человеке, повесть, Б.Н.Полевой",
    "Стихи скандалиста, сборник,  С.А. Есенин"
  );
  cy.contains("Каштанка, рассказ, А.П.Чехов").should("be.visible");
});

it("Should add to favorite books", () => {
  cy.addBookToFavorite(
    "Каштанка, рассказ, А.П.Чехов",
    "Идиот, роман, Ф.М. Достоевский",
    "Повесть о настоящем человеке, повесть, Б.Н.Полевой",
    "Стихи скандалиста, сборник,  С.А. Есенин"
  );
  cy.contains("Каштанка, рассказ, А.П.Чехов").should("be.visible");
});

it("Should delete book from favorite books", () => {
  cy.get("h4").click();
  cy.deleteBook("Идиот, роман, Ф.М. Достоевский");
});
