"use client";

import { TEnvironment } from "@formbricks/types/v1/environment";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@formbricks/ui";
import { ArchiveBoxIcon, CheckIcon, PauseIcon, ExclamationTriangleIcon } from "@heroicons/react/24/solid";

interface SurveyStatusIndicatorProps {
  status: string;
  tooltip?: boolean;
  environment: TEnvironment;
  type: string;
}

export default function SurveyStatusIndicator({
  status,
  tooltip,
  environment,
  type,
}: SurveyStatusIndicatorProps) {
  if (!environment.widgetSetupCompleted) {
    if (type === "web") {
      return (
        <div>
          <ExclamationTriangleIcon className="h-4 w-4 text-amber-500" />
        </div>
      );
    } else {
      return null;
    }
  }
  if (tooltip) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            {status === "inProgress" && (
              <span className="relative  flex h-3 w-3">
                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
              </span>
            )}
            {status === "paused" && (
              <div className=" rounded-full bg-slate-300 p-1">
                <PauseIcon className="h-3 w-3 text-slate-600" />
              </div>
            )}
            {status === "completed" && (
              <div className=" rounded-full bg-slate-200 p-1">
                <CheckIcon className="h-3 w-3 text-slate-600" />
              </div>
            )}
            {status === "archived" && (
              <div className=" rounded-full bg-slate-300 p-1">
                <ArchiveBoxIcon className="h-3 w-3 text-slate-600" />
              </div>
            )}
          </TooltipTrigger>
          <TooltipContent>
            <div className="flex items-center space-x-2">
              {status === "inProgress" ? (
                <>
                  <span>Gathering responses</span>
                  <span className="relative  flex h-3 w-3">
                    <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
                  </span>
                </>
              ) : status === "paused" ? (
                <>
                  <span className="text-slate-800">Survey paused.</span>
                  <div className=" rounded-full bg-slate-300 p-1">
                    <PauseIcon className="h-3 w-3 text-slate-600" />
                  </div>
                </>
              ) : status === "completed" ? (
                <div className="flex items-center space-x-2">
                  <span>Survey completed.</span>
                  <div className=" rounded-full bg-slate-200 p-1">
                    <CheckIcon className="h-3 w-3 text-slate-600" />
                  </div>
                </div>
              ) : status === "archived" ? (
                <div className="flex items-center space-x-2">
                  <span>Survey archived.</span>
                  <div className=" rounded-full bg-slate-300 p-1">
                    <ArchiveBoxIcon className="h-3 w-3 text-slate-600" />
                  </div>
                </div>
              ) : null}
            </div>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  } else
    return (
      <span>
        {status === "inProgress" && (
          <span className="relative  flex h-3 w-3">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500"></span>
          </span>
        )}
        {status === "paused" && (
          <div className=" rounded-full bg-slate-300 p-1">
            <PauseIcon className="h-3 w-3 text-slate-600" />
          </div>
        )}
        {status === "completed" && (
          <div className=" rounded-full bg-slate-200 p-1">
            <CheckIcon className="h-3 w-3 text-slate-600" />
          </div>
        )}
        {status === "archived" && (
          <div className=" rounded-full bg-slate-300 p-1">
            <ArchiveBoxIcon className="h-3 w-3 text-slate-600" />
          </div>
        )}
      </span>
    );
}
