# Boadicea Design System

**Goal:** Build components that are simple, clear, accessible, and robust.

## Useful Resources

- [Figma](https://www.figma.com/community/file/1611061497603272825)
- [Zeroheight](https://zeroheight.com/83e7dd7f3)

## Running Storybook

The project runs inside a Docker container.

1. **Build the Docker image:**

```bash
docker build -t boadicea-ds .
```

2. **Run the container:***

```bash
docker run -it -p 6006:6006 boadicea-ds
```

3. **Access Storybook:**

Open your browser at http://localhost:6006