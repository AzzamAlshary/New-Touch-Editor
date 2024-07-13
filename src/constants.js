export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(name) {\n\tconsole.log("Hello, " + name + "!");\n}\n\ngreet("new-touch");\n`,
  typescript: `\ntype Params = {\n\tname: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log("Hello, " + data.name + "!");\n}\n\ngreet({ name: "new-touch" });\n`,
  python: `\ndef greet(name):\n\tprint("Hello, " + name + "!")\n\ngreet("new-touch")\n`,
  java: `\npublic class HelloNewTouch {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Hello new-touch");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloNewTouch\n{\n\tclass Hello { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Hello new-touch");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$name = 'new-touch';\necho $name;\n",
};
