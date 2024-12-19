import { validateHeaderName } from "http"
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  Circle,
  CircleOff,
  HelpCircle,
  Timer,
} from "lucide-react"

export const providers = [
  {
    label: "AWS",
    value: "aws",
  },
  {
    label: "GCP",
    value: "gcp",
  },
  {
    label: "Azure",
    value: "azure",
  },
  {
    label: "Digital Ocean",
    value: "do",
  },
]

export const regions = [
  {
    label: "North America",
    value: "na",
  },
  {
    label: "Europe",
    value: "eu",
  },
  {
    label: "Asia",
    value: "asia",
  },
  {
    label: "Australia",
    value: "au",
  },
]

export const statuses = [
  {
    label: "Ready",
    value: "ready",
    icon: CheckCircle,
  },
  {
    label: "Pending",
    value: "pending",
    icon: HelpCircle,
  },
  {
    label: "Installing",
    value: "installing",
    icon: Timer,
  },
  {
    label: "Deleting",
    value: "deleting",
    icon: Circle,
  }
]