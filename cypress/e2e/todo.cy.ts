const locators = {
  inputType: "input[name='taskName']",
};

describe("todoTest", () => {
  it("add todo test", () => {
    cy.visit("/");
    cy.get(locators.inputType)
      .type("Тестовое задание")
      .should("have.value", "Тестовое задание")
      .type("{enter}");

    cy.get(locators.inputType)
      .type("Прекрасный код")
      .should("have.value", "Прекрасный код")
      .type("{enter}");

    cy.get(locators.inputType)
      .type("Прекрасный код")
      .should("have.value", "Прекрасный код")
      .type("{enter}");
    cy.get(locators.inputType)
      .type("Новое  задание")
      .should("have.value", "Новое  задание")
      .type("{enter}");
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Уже существует задача с таким названием");
    });
  });

  it("filter  test", () => {
    cy.contains("Прекрасный код").siblings().click();
    cy.contains("Completed").click();

    cy.contains("Active").click();
    cy.contains("All").click();
    cy.contains("Clear completed").click();
  });
});
