export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  iconName?: string; // Material symbol icon (used as fallback if no image)
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'name',
    title: 'title sample',
    description: 'description sample',
    imageUrl: 'image',
    iconName: 'code',
    tags: ['React', 'Tailwind CSS', 'C++'],
    liveUrl: 'url',
    githubUrl: 'url',
  },
  {
    id: 'name',
    title: 'title sample',
    description: 'description sample',
    imageUrl: 'image',
    iconName: 'code',
    tags: ['React', 'Tailwind CSS', 'C++'],
    liveUrl: 'url',
    githubUrl: 'url',
  },  {
    id: 'name',
    title: 'title sample',
    description: 'description sample',
    imageUrl: 'image',
    iconName: 'code',
    tags: ['React', 'Tailwind CSS', 'C++'],
    liveUrl: 'url',
    githubUrl: 'url',
  },
];