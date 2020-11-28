export const ARTICLES: Array<Article> = [
  {
    title: 'Project Setup With Mono Repo - Angular Architecture',
    description: 'While building an enterprise-level application, it is hard to manage...',
    url: 'https://www.c-sharpcorner.com/article/project-setup-with-mono-repo-angular-architecture/'
  },
  {
    title: 'Creating Web API Using Code-First Approach In Entity Framework',
    description: 'In this article, we will create a database with a foreign key constraint (one to...',
    url: 'https://www.c-sharpcorner.com/article/creating-web-api-using-code-first-approach-in-entity-framework/'
  },
  {
    title: 'Creating MVC Applications Using Entity Framework Code First Approach',
    description: 'Entity Framework is a relational mapper framework. It is an enhancement of ADO.NET...',
    url: 'https://www.c-sharpcorner.com/article/creating-mvc-application-using-entity-framework-code-first-approach/'
  },
];

export class Article {
  title: string;
  description: string;
  url: string;
}

