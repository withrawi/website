# Terminal Completion

Rawi provides intelligent shell completion to make using the CLI faster and more discoverable.

## Quick Setup

```bash
# Auto-detect shell and install
rawi completion --install

# Install for specific shell
rawi completion --shell bash --install
rawi completion --shell zsh --install
```

## Features

- **Smart Command Completion** - Tab completion for all rawi commands
- **Dynamic Options** - Context-aware option completion
- **Value Completion** - Auto-complete profiles, providers, file types
- **File Path Completion** - Browse files when using file options
- **Multi-Shell Support** - Works with Bash, Zsh, and Fish

## How It Works

The completion system copies advanced completion scripts to `~/.rawi/completion/` and sources them from your shell profile:

- `~/.rawi/completion/rawi-completion.bash` - For Bash
- `~/.rawi/completion/rawi-completion.zsh` - For Zsh
- `~/.rawi/completion/rawi-completion.fish` - For Fish

## Examples

### Command Completion

```bash
rawi <TAB>
# Shows: ask, chat, exec, act, configure, provider, history, info, completion

rawi a<TAB>
# Shows: ask, act
```

### Option Completion

```bash
rawi ask --<TAB>
# Shows: --profile, --session, --act, --file, --verbose, etc.

rawi configure -<TAB>
# Shows: -p, --profile, --provider, --model, etc.
```

### Value Completion

```bash
rawi ask --provider <TAB>
# Shows: openai, anthropic, google, ollama, etc.

rawi ask --profile <TAB>
# Shows: default, work, personal (your actual profiles)

rawi ask --act <TAB>
# Shows: code-reviewer, translator, debugger (available templates)
```

### File Completion

```bash
rawi ask --file <TAB>
# Shows file browser for current directory

rawi ask --file-type <TAB>
# Shows: js, ts, py, java, go, etc.
```

## Troubleshooting

### Completion Not Working

1. Check installation:

   ```bash
   ls ~/.rawi/completion/
   type _rawi  # Should show completion function
   ```

2. Reload shell:

   ```bash
   source ~/.bashrc  # or ~/.zshrc
   # or restart terminal
   ```

3. Verify source line was added:
   ```bash
   grep -n "rawi-completion" ~/.bashrc ~/.zshrc
   ```

### Update Completions

When rawi is updated:

```bash
# Recopy updated completion scripts
rawi completion --shell bash
rawi completion --shell zsh

# Reload shell
source ~/.bashrc  # or ~/.zshrc
```

## Manual Installation

If you prefer manual setup:

```bash
# Copy completion script
rawi completion --shell bash

# Add source line to your profile
echo '[ -f "$HOME/.rawi/completion/rawi-completion.bash" ] && source "$HOME/.rawi/completion/rawi-completion.bash"' >> ~/.bashrc
source ~/.bashrc
```

## See Also

- [Completion Command](commands/completion.md) - Detailed command reference
- [Shell Integration](shell-integration.md) - Advanced shell setup
