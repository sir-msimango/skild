interface SkillRecord {
  id: string;
  title: string; // Write Code
  slug: string; // write-code
  description: string; // A brief description of the skill
  category: string;
  tags: string[]; // ['code', 'programming', 'development']
  installCommand: string;
  createdAt: string | null;
  authorClerkId: string | null;
  authorEmail: string | null;
}